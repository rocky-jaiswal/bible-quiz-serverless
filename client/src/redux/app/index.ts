import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LocaleEnum } from '../../constants/enums'
import { AppState } from '../../constants/types'

const initialState: AppState = { questionIndex: 0, lang: LocaleEnum.en }

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    incrementIndex: (state) => {
      state.questionIndex += 1
    },
    decrementIndex: (state) => {
      state.questionIndex -= 1
    },
    switchLocale: (state, action: PayloadAction<LocaleEnum>) => {
      state.lang = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementIndex, decrementIndex, switchLocale } = appSlice.actions
export default appSlice.reducer
