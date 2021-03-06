import * as React from 'react'

import { LocaleEnum } from '../../constants/enums'

import Footer from '../Footer'
import Header from '../Header'

import styles from './styles.module.scss'

interface Props {
  switchLocale(lang: LocaleEnum): unknown
  score: { correct: number; incorrect: number }
  children?: React.ReactElement<{}>
}

const Layout = (props: Props) => {
  return (
    <div className={styles.main_container}>
      <Header switchLocale={props.switchLocale} />
      <div className={styles.page}>
        <div className={styles.main}>{React.Children.toArray(props.children)}</div>
      </div>
      <Footer score={props.score} />
    </div>
  )
}

export default Layout
