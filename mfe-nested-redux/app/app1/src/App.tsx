import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './Layout'

import './index.scss'

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Layout>
      <p>App1 dev mode</p>
    </Layout>
  </div>
)
ReactDOM.render(<App />, document.getElementById('app'))
