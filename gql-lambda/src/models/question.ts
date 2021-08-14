import { attribute, hashKey, table } from '@aws/dynamodb-data-mapper-annotations'
import { Field, ObjectType, Int } from 'type-graphql'

@ObjectType()
class Option {
  @Field(_type => Int)
  @attribute()
  id?: number

  @Field({ nullable: false })
  @attribute()
  text?: string
}

@ObjectType()
@table('bible_quiz_questions')
class Question {
  @Field({ nullable: false })
  @hashKey()
  public id?: string

  @Field({ nullable: false })
  @attribute()
  public question?: string

  @Field({ nullable: false })
  @attribute()
  public type?: string

  @Field(_type => [Option])
  @attribute()
  public options?: Array<Option>
}

export default Question
