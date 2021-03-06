import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App'
import { store } from './store'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import 'normalize.css'
import './styles/main.css'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root') as HTMLElement
)

serviceWorkerRegistration.register()
