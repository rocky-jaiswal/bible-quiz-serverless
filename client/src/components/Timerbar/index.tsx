import { useState } from 'react'

import useInterval from '../../hooks/useInterval'
import styles from './styles.module.scss'

interface Props {
  questionsLength: number
  questionIndex: number
  incrementIndex: () => void
  decrementIndex: () => void
}

const Timerbar = (props: Props) => {
  let [width, setWidth] = useState(0)

  useInterval(() => {
    if (width < 100) {
      setWidth(width + 0.2)
    } else {
      setWidth(0)
      if (props.questionIndex < props.questionsLength - 1) {
        props.incrementIndex()
      } else {
        props.decrementIndex()
      }
    }
  }, 20)

  return (
    <div className={styles.timer_bar}>
      <div className={styles.timer} style={{ width: `${width}%` }} />
    </div>
  )
}

export default Timerbar
