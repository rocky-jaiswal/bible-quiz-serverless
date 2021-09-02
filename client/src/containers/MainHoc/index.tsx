import { useDispatch, useSelector } from 'react-redux'

import Layout from '../../components/Layout'
import { RootState } from '../../store'
import { LocaleEnum } from '../../constants/enums'

import { switchLocale } from '../../redux/app'

export const withLayout = (WrappedComponent: () => JSX.Element) => {
  const MainHoc = () => {
    const dispatch = useDispatch()

    const score = useSelector((state: RootState) => state.app.score)

    return (
      <Layout switchLocale={(payload: LocaleEnum) => dispatch(switchLocale(payload))} score={score}>
        <WrappedComponent />
      </Layout>
    )
  }

  return MainHoc
}
