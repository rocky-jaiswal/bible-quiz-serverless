import { LocaleEnum } from './enums'

export interface AppState {
  questionIndex: number
  lang: LocaleEnum
}

export interface RootState {
  app: AppState
}


export type OptionType = {
  id: number
  text: string
}

export type QuestionType = {
  id: string
  question: string
  type: string
  options: OptionType[]
}
