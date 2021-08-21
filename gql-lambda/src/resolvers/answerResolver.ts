import { Arg, Query, Resolver } from 'type-graphql'

import Question from '../models/question'
import questionsMapper from '../mappers/questionsMapper'
import Response from '../models/response'

@Resolver()
class AnswerResolver {
  @Query((_returns) => Response, { nullable: true })
  async validateAnswer(
    @Arg('questionId', { nullable: false }) questionId: string,
    @Arg('selectedOption', { nullable: false }) selectedOption: number
  ): Promise<Response> {
    const question = await questionsMapper.get<Question>(
      Object.assign(new Question(), {
        id: questionId
      })
    )

    return Object.assign(new Response(), {
      correct: question.answer === selectedOption,
      note: question.note
    })
  }
}

export default AnswerResolver
