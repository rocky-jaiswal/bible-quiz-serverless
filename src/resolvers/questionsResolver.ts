import { Query, Resolver } from 'type-graphql'

import Question from '../models/question'
import questionsMapper from '../mappers/questionsMapper'

@Resolver()
class QuestionsResolver {
  @Query((_returns) => [Question], { nullable: true })
  async allQuestions(): Promise<Question[]> {
    // TODO: This is test code, do not "scan" in production
    const questions: Question[] = []
    for await (const item of questionsMapper.scan(Question)) {
      questions.push(item)
    }
    return questions
  }
}

export default QuestionsResolver
