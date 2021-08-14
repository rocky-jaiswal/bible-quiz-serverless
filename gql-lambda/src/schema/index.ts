import { buildSchema } from 'type-graphql'

import GreetingsResolver from '../resolvers/greetingsResolver'
import QuestionsResolver from '../resolvers/questionsResolver'

export default async function bootstrapSchema() {
  return buildSchema({
    resolvers: [GreetingsResolver, QuestionsResolver],
    emitSchemaFile: false
  })
}
