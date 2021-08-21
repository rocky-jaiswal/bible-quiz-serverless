import Root from '../containers/Root'

interface RouteDefinition {
  sequence: number
  exact: boolean
  path: string
  component: () => JSX.Element
}

interface Routes {
  [propName: string]: RouteDefinition
}

const routes: Routes = {
  root: {
    sequence: 1,
    component: Root,
    exact: true,
    path: '/',
  }
}

export default routes
