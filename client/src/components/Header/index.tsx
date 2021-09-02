import { Link } from 'react-router-dom'
import { LocaleEnum } from '../../constants/enums'

import styles from './styles.module.scss'

interface Props {
  switchLocale(lang: LocaleEnum): unknown
}

const Header = (_props: Props) => {
  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <Link to="/">Bible Quiz</Link>
      </div>
    </div>
  )
}

export default Header
