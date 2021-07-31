import path from 'path'
import { buildSchema } from 'type-graphql'

import GreetingsResolver from '../resolvers/greetingsResolver'

export default async function bootstrapSchema() {
  return buildSchema({
    resolvers: [GreetingsResolver],
    emitSchemaFile: path.resolve('/tmp/__snapshots__/schema/schema.gql')
  })
}
