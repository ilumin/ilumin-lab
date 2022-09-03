import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, useDispatch, useSelector } from 'react-redux'

import { store } from './store'
import Layout from 'app1/Layout'

import './index.scss'
import { increment } from './features/counter'

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(increment())
  }

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Layout>
        <div>Name: shell</div>
        <div>Framework: react</div>
        <div>Language: TypeScript</div>
        <div>CSS: Tailwind</div>
        <button onClick={handleClick} className="bg-gray-300 px-4 py-2">
          Count: {count}
        </button>
      </Layout>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
