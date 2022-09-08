// Common
import { configureStore } from '@reduxjs/toolkit'

// Reducers
import timeline from 'redux/slices/timeline'
import expertise from 'redux/slices/expertise'
import experience from 'redux/slices/experience'

const reducer = {
  timeline,
  expertise,
  experience
}

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => [...getDefaultMiddleware()]
})

export default store
