import { hashKey, table } from '@aws/dynamodb-data-mapper-annotations'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
@table('bible_quiz_questions')
class Question {
  @Field({ nullable: false })
  @hashKey()
  public id?: string
}

export default Question
