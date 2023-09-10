import { configureStore } from '@reduxjs/toolkit'
import outletReducer from './redux/outletSlice'
import contactReducer from './redux/contactSlice'

export default configureStore({
  reducer: {
    outlet: outletReducer,
    contact: contactReducer,
  }
})