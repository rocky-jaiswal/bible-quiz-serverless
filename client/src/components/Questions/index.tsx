// import styles from './styles.module.scss'

import Timerbar from '../Timerbar'
import Question from '../Question'
import Options from '../Options'
import Note from '../Note'

import { QuestionType } from '../../constants/types'

import styles from './styles.module.scss'

interface Props {
  questions: QuestionType[]
  currentQuestionIndex: number
  isCheckingResponse: boolean
  noteText: string | null
  responseResult: string
  incrementIndex: () => void
  resetIndex: () => void
  setResponse: (payload: unknown) => void
  handleSelection: ({ questionId, selectedOption }: { questionId: string; selectedOption: number }) => any
}

const Questions = (props: Props) => {
  const changeQuestion = () => {
    if (props.currentQuestionIndex < props.questions.length - 1) {
      props.incrementIndex()
    } else {
      props.resetIndex()
    }
  }

  return (
    <div className={styles.questions_container}>
      <Timerbar changeQuestion={changeQuestion} pause={props.isCheckingResponse} />
      <Question questionText={props.questions[props.currentQuestionIndex].question} />
      {props.noteText !== null ? (
        <Note noteText={props.noteText} responseResult={props.responseResult} changeQuestion={changeQuestion} />
      ) : (
        <Options
          options={props.questions[props.currentQuestionIndex].options}
          currentQuestionIndex={props.currentQuestionIndex}
          currentQuestionId={props.questions[props.currentQuestionIndex].id}
          isCheckingResponse={props.isCheckingResponse}
          handleSelection={props.handleSelection}
          setResponse={props.setResponse}
        />
      )}
    </div>
  )
}

export default Questions
