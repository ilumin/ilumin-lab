import { configureStore } from '@reduxjs/toolkit'
import disableReducer from './features/disable'

export const store = configureStore({
  reducer: {
    disable: disableReducer,
  },
})
