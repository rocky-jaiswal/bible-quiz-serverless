import { useSelector, useDispatch } from 'react-redux'

import { withLayout } from '../MainHoc'

import { RootState } from '../../constants/types'
import { decrementIndex, incrementIndex } from '../../redux/app'

import Questions from '../../components/Questions'
import LoadingSpinner from '../../components/LoadingSpinner'

import api from '../../api/questions'
import styles from './styles.module.scss'

const Root = () => {
  const questionIndex = useSelector((state: RootState) => state.app.questionIndex)
  const dispatch = useDispatch()
  const { data, error, isLoading } = api.useGetQuestionsQuery('')

  if (error) {
    return <div>Error!!</div>
  }

  return (
    <div className={styles.container}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Questions
          questions={data}
          questionIndex={questionIndex}
          incrementIndex={() => dispatch(incrementIndex())}
          decrementIndex={() => dispatch(decrementIndex())}
        />
      )}
    </div>
  )
}

export default withLayout(Root)
