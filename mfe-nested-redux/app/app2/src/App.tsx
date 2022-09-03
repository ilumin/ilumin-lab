import React from 'react'
import ReactDOM from 'react-dom'

import Button from './Button'

import './index.scss'

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Button onClick={() => console.log('click from dev shell')} />
  </div>
)
ReactDOM.render(<App />, document.getElementById('app'))
