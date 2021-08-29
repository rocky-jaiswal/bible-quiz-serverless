import styles from './styles.module.scss'

interface Props {
  small?: boolean
}

const LoadingSpinner = (props: Props) => {
  return (
    <div className={props.small ? styles.spinner_wrapper_small : styles.spinner_wrapper}>
      <div className={props.small ? styles.spinner_small : styles.spinner} />
    </div>
  )
}

export default LoadingSpinner
