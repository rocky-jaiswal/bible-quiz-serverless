#!/usr/bin/env python3

import os
from argparse import ArgumentParser

from aws_cdk import core as cdk

from gql_api.app_stack import AppStack


def synth(account, region):
    app = cdk.App()

    AppStack(
        app,
        "GqlApiStack",
        env=cdk.Environment(account=account, region=region),
    )

    app.synth()


parser = ArgumentParser()
parser.add_argument("-a", "--accountid", dest="account_id", help="AWS account id")
parser.add_argument("-r", "--region", dest="region", help="main AWS region")

args = parser.parse_args()
synth(args.account_id, args.region)
