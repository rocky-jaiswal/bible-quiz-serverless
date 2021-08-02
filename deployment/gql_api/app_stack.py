from aws_cdk import (
    core as cdk,
    aws_lambda as _lambda,
    aws_apigateway as _apigw,
    aws_dynamodb,
)


class AppStack(cdk.Stack):
    def __init__(self, scope: cdk.Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, env=kwargs["env"])

        base_lambda = _lambda.Function(
            self,
            "GQL_Lambda",
            handler="index.handler",
            runtime=_lambda.Runtime.NODEJS_14_X,
            code=_lambda.Code.asset("artifact/lambda.zip"),
        )

        cors_options = _apigw.CorsOptions(
            allow_origins=_apigw.Cors.ALL_ORIGINS,
            allow_methods=_apigw.Cors.ALL_METHODS,
        )

        entity_lambda_integration = _apigw.LambdaIntegration(
            handler=base_lambda,
        )

        rest_api = _apigw.RestApi(
            self, "RestAPI", default_cors_preflight_options=cors_options
        )
        rest_api.root.add_method("GET", entity_lambda_integration)
        rest_api.root.add_method("POST", entity_lambda_integration)

        self.table_name = "bible_quiz_questions"

        questions_table = aws_dynamodb.Table(
            self,
            "QuestionsTable",
            table_name=self.table_name,
            partition_key=aws_dynamodb.Attribute(
                name=f"id", type=aws_dynamodb.AttributeType.STRING
            ),
            removal_policy=cdk.RemovalPolicy.DESTROY,  # NOT recommended for production code
        )

        questions_table.grant_full_access(base_lambda)
