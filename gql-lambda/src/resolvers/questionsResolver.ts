import { Query, Resolver } from 'type-graphql'

import Question from '../models/question'
import questionsMapper from '../mappers/questionsMapper'

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

@Resolver()
class QuestionsResolver {
  @Query((_returns) => [Question], { nullable: true })
  async allQuestions(): Promise<Question[]> {
    const questions: Question[] = []

    for await (const item of questionsMapper.scan(Question)) {
      questions.push(item)
    }

    return shuffleArray(
      questions.map((q) => {
        return {
          id: q.id,
          question: q.question,
          options: q.options,
          type: q.type
        }
      })
    )
  }
}

export default QuestionsResolver
