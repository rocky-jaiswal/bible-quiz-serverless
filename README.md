# Serverless Lambda GraphQL + DynamoDB

1. Code in TS (Apollo + QraphQL + TypeGraphQL)
2. Build with `yarn build:lambda`
3. To deploy go to `deployment`
4. Setup [poetry project](https://python-poetry.org/) with Python 3
5. `env AWS_ACCOUNT_ID=xxx AWS_REGION=eu-central-1 npx cdk synth`
6. `env AWS_ACCOUNT_ID=xxx AWS_REGION=eu-central-1 npx cdk deploy`
