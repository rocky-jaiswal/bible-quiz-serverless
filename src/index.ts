import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-lambda'

import bootstrapSchema from './schema'

export const handler = async (arg1: any, arg2: any, arg3: any) => {
  const schema = await bootstrapSchema()

  const server = new ApolloServer({
    schema
  })

  const h = server.createHandler()

  return await h(arg1, arg2, arg3)
}
