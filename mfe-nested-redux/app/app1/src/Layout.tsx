import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'

import { store } from './store'

import Button from 'app2/Button'
import { disable, enable } from './features/disable'

const LayoutContainer = ({ children }) => {
  const disabled = useSelector((state) => state.disable.disabled)
  const dispatch = useDispatch()

  const handleChangeDisableControl = (e) => {
    console.log('change:', e.target.checked)
    if (e.target.checked) return dispatch(disable())
    if (!e.target.checked) return dispatch(enable())
  }

  console.log('disabled:', disabled)

  return (
    <>
      <div className="p-2 text-md">{children}</div>
      <label className="text-md">
        <input
          type="checkbox"
          onChange={handleChangeDisableControl}
          checked={disabled}
        />{' '}
        hide button
      </label>
      <hr />
      {!disabled && <Button onClick={() => console.log('Click from app1')} />}
    </>
  )
}

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <LayoutContainer>{children}</LayoutContainer>
    </Provider>
  )
}

export default Layout
