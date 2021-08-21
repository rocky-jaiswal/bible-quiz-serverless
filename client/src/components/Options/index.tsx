import { OptionType } from '../../constants/types'

import styles from './styles.module.scss'

interface Props {
  options: OptionType[]
}

const Options = (props: Props) => {
  return (
    <div className={styles.options_area}>
      {props.options.map((option: OptionType) => {
        return (
          <div className={styles.option} key={`option-${option.id}`}>
            <button>{option.id}</button>
            <span>{option.text}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Options
