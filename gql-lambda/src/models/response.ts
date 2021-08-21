import { Field, ObjectType } from 'type-graphql'

@ObjectType()
class Response {
  @Field({ nullable: false })
  correct?: boolean

  @Field({ nullable: false })
  note?: string
}

export default Response
