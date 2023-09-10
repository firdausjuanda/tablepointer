import { createSlice } from '@reduxjs/toolkit'

export const contactSlice = createSlice({
  name: 'contact',
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

export const { save, reset } = contactSlice.actions

export default contactSlice.reducer