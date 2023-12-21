import { configureStore } from '@reduxjs/toolkit'

import { contactApi } from 'store/server/contactApi'

const reducer = {
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
