#!/usr/bin/fish

xfce4-terminal \
  --tab -T client --working-directory=/home/rockyj/Workspace/01-node/bible-quiz-serverless/client \
  --tab -T gql-lambda --working-directory=/home/rockyj/Workspace/01-node/bible-quiz-serverless/gql-lambda \
  --tab -T data-loader --working-directory=/home/rockyj/Workspace/01-node/bible-quiz-serverless/data-loader \
  --tab -T deployment --working-directory=/home/rockyj/Workspace/01-node/bible-quiz-serverless/deployment -e "poetry shell"
