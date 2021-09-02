import styles from './styles.module.scss'

interface Props {
  noteText: string
  responseResult: string
  changeQuestion: () => void
}

const RightCheck = () => {
  return (
    <div className={styles.svg_image}>
      <svg width="200" height="200">
        <g>
          <ellipse className={styles.outer_success} ry="81.75" rx="78.5" id="svg_1" cy="99.75" cx="101.5" fill="none" />
          <line y2="144.5" x2="58" y1="109" x1="37" className={styles.outer_success} />
          <line y2="71.62385" x2="164.16489" y1="143" x1="51.7" className={styles.outer_success} />
        </g>
      </svg>
    </div>
  )
}

const Wrong = () => {
  return (
    <div className={styles.svg_image}>
      <svg width="200" height="200">
        <g>
          <ellipse className={styles.outer_wrong} ry="81.75" rx="78.5" id="svg_1" cy="99.75" cx="101.5" fill="none" />
          <line y2="150" x2="144" y1="50" x1="55" className={styles.outer_wrong} />
          <line transform="rotate(82 105 100)" y2="155" x2="144" y1="60" x1="55" className={styles.outer_wrong} />
        </g>
      </svg>
    </div>
  )
}

const Note = (props: Props) => {
  return (
    <div className={styles.note_area}>
      <div className={styles.note_wrapper}>
        {props.responseResult === 'correct' ? <RightCheck /> : <Wrong />}
        <p>{props.noteText}</p>
        <button className={styles.next_question} onClick={() => props.changeQuestion()}>
          <span>Next Question</span>
        </button>
      </div>
    </div>
  )
}

export default Note
