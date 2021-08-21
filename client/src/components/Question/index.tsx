import styles from './styles.module.scss'

interface Props {
  questionText: string
}

const Question = (props: Props) => {
  return (
    <div className={styles.question_area}>
      <p>{props.questionText}</p>
    </div>
  )
}

export default Question
