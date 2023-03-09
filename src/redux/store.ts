// Common
import { configureStore } from '@reduxjs/toolkit'

// Reducers
import timeline from 'redux/slices/timeline'
import expertise from 'redux/slices/expertise'
import experience from 'redux/slices/experience'
import { contactApi } from 'redux/slices/contact'

const reducer = {
  timeline,
  expertise,
  experience,
  [contactApi.reducerPath]: contactApi.reducer
}

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    // eslint-disable-next-line unicorn/prefer-spread
    getDefaultMiddleware().concat(contactApi.middleware)
})

export default store
