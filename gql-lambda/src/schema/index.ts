import { buildSchema } from 'type-graphql'

import GreetingsResolver from '../resolvers/greetingsResolver'
import QuestionsResolver from '../resolvers/questionsResolver'
import AnswerResolver from '../resolvers/answerResolver'

export default async function bootstrapSchema() {
  return buildSchema({
    resolvers: [GreetingsResolver, QuestionsResolver, AnswerResolver],
    emitSchemaFile: false
  })
}
