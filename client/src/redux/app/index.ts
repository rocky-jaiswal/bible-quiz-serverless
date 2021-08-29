import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LocaleEnum } from '../../constants/enums'
import { AppState } from '../../constants/types'

const initialState: AppState = {
  question: {
    currentIndex: 0,
    currentId: null,
    timerActive: true,
  },
  note: {
    text: null,
  },
  response: {
    id: null,
    questionIndex: 0,
    result: 'unselected',
  },
  lang: LocaleEnum.en,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    incrementIndex: (state) => {
      state.question.currentIndex += 1
      state.response = {
        id: null,
        questionIndex: state.question.currentIndex,
        result: 'unselected',
      }
      state.note = {
        text: null,
      }
    },
    decrementIndex: (state) => {
      state.question.currentIndex -= 1
      state.response = {
        id: null,
        questionIndex: state.question.currentIndex,
        result: 'unselected',
      }
      state.note = {
        text: null,
      }
    },
    resetIndex: (state) => {
      state.question.currentIndex = 0
      state.response = {
        id: null,
        questionIndex: state.question.currentIndex,
        result: 'unselected',
      }
      state.note = {
        text: null,
      }
    },
    setResponse: (state, action) => {
      if (action.payload.result) {
        state.response = {
          id: action.payload.selectedOption,
          questionIndex: state.question.currentIndex,
          result: action.payload.result.correct ? 'correct' : 'wrong',
        }
        state.note = {
          text: action.payload.result.note,
        }
      }
    },
    switchLocale: (state, action: PayloadAction<LocaleEnum>) => {
      state.lang = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementIndex, decrementIndex, resetIndex, setResponse, switchLocale } = appSlice.actions
export default appSlice.reducer
