import { useState } from 'react'

import useInterval from '../../hooks/useInterval'
import styles from './styles.module.scss'

interface Props {
  pause: boolean
  changeQuestion: () => void
}

const LOAD_TIME = 15
const REFRESH_TIME = 20
const WIDTH_INCREASE = 100 / ((LOAD_TIME * 1000) / REFRESH_TIME)

const Timerbar = (props: Props) => {
  let [width, setWidth] = useState(0)

  useInterval(() => {
    if (!props.pause) {
      if (width < 100) {
        setWidth(width + WIDTH_INCREASE)
      } else {
        setWidth(0)
        props.changeQuestion()
      }
    } else {
      setWidth(0)
    }
  }, REFRESH_TIME)

  return (
    <div className={styles.timer_bar}>
      <div className={styles.timer} style={{ width: `${width}%` }} />
    </div>
  )
}

export default Timerbar
