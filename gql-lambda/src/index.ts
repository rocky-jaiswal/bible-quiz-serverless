import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-lambda'

import bootstrapSchema from './schema'

export const handler = async (event: unknown, context: any, callback: any) => {
  const schema = await bootstrapSchema()

  const server = new ApolloServer({
    schema
  })

  const apolloHandler = server.createHandler()

  return await apolloHandler(event, context, callback)
}
