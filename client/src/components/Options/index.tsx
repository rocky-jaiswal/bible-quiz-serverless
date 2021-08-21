import styles from './styles.module.scss'

const Options = (_props: {}) => {
  return (
    <div className={styles.options_area}>
      <div className={styles.option}>
        <button>1</button>
        <span>Option 1</span>
      </div>
      <div className={styles.option}>
        <button>2</button>
        <span>Option 2</span>
      </div>
      <div className={styles.option}>
        <button>3</button>
        <span>Option 3</span>
      </div>
      <div className={styles.option}>
        <button>4</button>
        <span>Option 4</span>
      </div>
    </div>
  )
}

export default Options
