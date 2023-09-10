import { createSlice } from '@reduxjs/toolkit'

export const outletSlice = createSlice({
  name: 'outlet',
  initialState: {
    value: {},
  },
  reducers: {
    save: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
        state.value = {};
    },
  },
})

export const { save, reset, resetElement } = outletSlice.actions

export default outletSlice.reducer