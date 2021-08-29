import { useState } from 'react'

import { OptionType } from '../../constants/types'
import LoadingSpinner from '../LoadingSpinner'

import styles from './styles.module.scss'

interface Props {
  currentQuestionIndex: number
  currentQuestionId: string
  options: OptionType[]
  isCheckingResponse: boolean
  handleSelection: ({ questionId, selectedOption }: { questionId: string; selectedOption: number }) => any
  setResponse: (payload: unknown) => void
}

const Options = (props: Props) => {
  let [selected, setSelected] = useState<number | null>(null)

  return (
    <div className={styles.options_area}>
      {props.options.map((option: OptionType) => {
        return (
          <div className={styles.option} key={`${props.currentQuestionId}-${option.id}`}>
            <button
              disabled={props.isCheckingResponse}
              onClick={async () => {
                setSelected(option.id)
                const result = await props.handleSelection({
                  selectedOption: option.id,
                  questionId: props.currentQuestionId,
                })
                props.setResponse({ result: result.data, selectedOption: option.id })
              }}
            >
              {props.isCheckingResponse && selected === option.id ? (
                <LoadingSpinner small={true} />
              ) : (
                <span>{option.id}</span>
              )}
            </button>
            <span>{option.text}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Options
