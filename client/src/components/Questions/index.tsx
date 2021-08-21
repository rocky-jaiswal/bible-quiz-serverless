// import styles from './styles.module.scss'

import Timerbar from '../Timerbar'
import Question from '../Question'
import Options from '../Options'

import { QuestionType } from '../../constants/types'

import styles from './styles.module.scss'

interface Props {
  questions: QuestionType[]
  questionIndex: number
  incrementIndex: () => void
  decrementIndex: () => void
}

const Questions = (props: Props) => {
  return (
    <div className={styles.questions_container}>
      <Timerbar
        questionIndex={props.questionIndex}
        incrementIndex={props.incrementIndex}
        decrementIndex={props.decrementIndex}
        questionsLength={props.questions.length}
      />
      <Question questionText={props.questions[props.questionIndex].question} />
      <Options />
    </div>
  )
}

export default Questions
