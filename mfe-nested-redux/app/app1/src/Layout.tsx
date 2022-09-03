import React from 'react'

import Button from 'app2/Button'

const Layout = ({ children }) => {
  return (
    <div>
      <h1>App 1 Layout</h1>
      <div className="p-2 text-md">{children}</div>
      <Button onClick={() => console.log('Click from app1')} />
    </div>
  )
}

export default Layout
