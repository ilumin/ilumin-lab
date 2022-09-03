import React from 'react'
import ReactDOM from 'react-dom'

import Layout from 'app1/Layout'

import './index.scss'

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Layout>
      <div>Name: shell</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Tailwind</div>
    </Layout>
  </div>
)
ReactDOM.render(<App />, document.getElementById('app'))
