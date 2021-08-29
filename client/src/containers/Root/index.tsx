import { useSelector, useDispatch } from 'react-redux'

import { withLayout } from '../MainHoc'

import { RootState } from '../../store'
import { resetIndex, incrementIndex, setResponse } from '../../redux/app'

import Questions from '../../components/Questions'
import LoadingSpinner from '../../components/LoadingSpinner'

import api from '../../api/questions'
import styles from './styles.module.scss'

const Root = () => {
  const dispatch = useDispatch()
  const currentQuestionIndex = useSelector((state: RootState) => state.app.question.currentIndex)
  const noteText = useSelector((state: RootState) => state.app.note.text)
  const responseResult = useSelector((state: RootState) => state.app.response.result)

  const { data: questions, error: errorLoadingQuestions, isLoading: loadingQuestions } = api.useGetQuestionsQuery(null)
  const [selectResponse, { isLoading: isCheckingResponse, error: errorInChecking }] = api.useValidateResponseMutation()

  if (errorLoadingQuestions || errorInChecking) {
    return <div>Error!!</div>
  }

  return (
    <div className={styles.container}>
      {loadingQuestions ? (
        <LoadingSpinner />
      ) : (
        <Questions
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          isCheckingResponse={isCheckingResponse || noteText !== null}
          noteText={noteText}
          responseResult={responseResult}
          incrementIndex={() => dispatch(incrementIndex())}
          resetIndex={() => dispatch(resetIndex())}
          setResponse={(payload: unknown) => dispatch(setResponse(payload))}
          handleSelection={selectResponse}
        />
      )}
    </div>
  )
}

export default withLayout(Root)
