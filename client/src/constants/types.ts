import { LocaleEnum } from './enums'

export interface AppState {
  question: {
    currentIndex: number
    currentId: string | null
    timerActive: boolean
  }
  note: {
    text: string | null
  }
  response: {
    id: number | null
    questionIndex: number
    result: 'unselected' | 'correct' | 'wrong'
  }
  lang: LocaleEnum
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
