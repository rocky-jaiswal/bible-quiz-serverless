const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid')

const data = require('./data')

const handler = async (_event, _context, _callback) => {
  const docClient = new AWS.DynamoDB.DocumentClient()

  const promises = data.map((question) => {
    const id = uuidv4()
    const row = {
      TableName: 'bible_quiz_questions',
      Item: { id, ...question }
    }
    console.log(`Inserting item - ${JSON.stringify(row)}`)
    return docClient.put(row).promise()
  })

  await Promise.all(promises)

  return {}
}

module.exports = { handler }
