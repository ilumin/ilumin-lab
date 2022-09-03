import { createSlice } from '@reduxjs/toolkit'

export const disableSlice = createSlice({
  name: 'disable',
  initialState: { disabled: true },
  reducers: {
    disable: (state) => {
      state.disabled = true
    },
    enable: (state) => {
      state.disabled = false
    },
  },
})

export const { disable, enable } = disableSlice.actions

export default disableSlice.reducer
