import styles from './styles.module.scss'

interface Props {
  score: { correct: number; incorrect: number }
}

const Footer = (props: Props) => {
  return (
    <div className={styles.footer}>
      <p>Correct: {props.score.correct}</p>
      <p>Incorrect: {props.score.incorrect}</p>
    </div>
  )
}

export default Footer
