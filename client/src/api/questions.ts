import { request, gql, ClientError } from 'graphql-request'
import { createApi } from '@reduxjs/toolkit/query/react'

const graphqlBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({ body }: { body: string }) => {
    try {
      const result = await request(baseUrl, body)
      return { data: result }
    } catch (error) {
      if (error instanceof ClientError) {
        return { error: { status: error.response.status, data: error } }
      }
      return { error: { status: 500, data: error } }
    }
  }

const questionsAPI = createApi({
  baseQuery: graphqlBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL || '',
  }),
  reducerPath: 'questionsAPI',
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: () => ({
        body: gql`
          query {
            allQuestions {
              id
              question
              type
              options {
                id
                text
              }
            }
          }
        `,
      }),
      transformResponse: (response) => response.allQuestions,
    }),
    validateResponse: builder.mutation({
      query: (args: any) => ({
        body: gql`
          query {
            validateAnswer(questionId: "${args.questionId}", selectedOption: ${args.selectedOption}) {
              note
              correct
            }
          }
        `,
      }),
      transformResponse: (response) => response.validateAnswer,
    }),
  }),
})

export default questionsAPI
