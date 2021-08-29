import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import questionsAPI from '../api/questions'
import appReducer from '../redux/app'
import allSagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()
allSagas.map((saga) => sagaMiddleware.run(saga))

export const store = configureStore({
  reducer: {
    app: appReducer,
    [questionsAPI.reducerPath]: questionsAPI.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(sagaMiddleware).concat(questionsAPI.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
