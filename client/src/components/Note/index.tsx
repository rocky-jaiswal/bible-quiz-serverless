import styles from './styles.module.scss'

interface Props {
  noteText: string
  responseResult: string
  changeQuestion: () => void
}

const Note = (props: Props) => {
  return (
    <div className={props.responseResult === 'correct' ? styles.note_area_correct : styles.note_area_wrong}>
      <button className={styles.next_question} onClick={() => props.changeQuestion()}>
        <span>▶️</span>
      </button>
      {props.responseResult === 'correct' ? <p>✅ Right!</p> : <p>❌ Wrong!</p>}
      <p>{props.noteText}</p>
    </div>
  )
}

export default Note
