import { DataMapper } from '@aws/dynamodb-data-mapper'
import DynamoDB = require('aws-sdk/clients/dynamodb')

const questionsMapper = new DataMapper({
  client: new DynamoDB({ region: 'eu-central-1' })
})

export default questionsMapper
