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
  currentQuestionId: string
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

  const handleOptionSelect = async (optionId: number) => {
    const result = await props.handleSelection({
      selectedOption: optionId,
      questionId: props.currentQuestionId,
    })
    props.setResponse({ result: result.data, selectedOption: optionId })
  }

  return (
    <div className={styles.questions_container}>
      <Timerbar pause={props.isCheckingResponse} onComplete={handleOptionSelect} />
      <Question questionText={props.questions[props.currentQuestionIndex].question} />
      {props.responseResult !== 'unselected' ? (
        <Note noteText={props.noteText || ''} responseResult={props.responseResult} changeQuestion={changeQuestion} />
      ) : (
        <Options
          options={props.questions[props.currentQuestionIndex].options}
          currentQuestionIndex={props.currentQuestionIndex}
          currentQuestionId={props.currentQuestionId}
          isCheckingResponse={props.isCheckingResponse}
          handleSelection={handleOptionSelect}
        />
      )}
    </div>
  )
}

export default Questions
