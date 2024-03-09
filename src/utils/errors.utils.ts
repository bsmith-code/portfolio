import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export const getQueryError = (error: FetchBaseQueryError | SerializedError) => {
  if ('error' in error) {
    return error.error
  }

  if ('data' in error) {
    return (error.data as Error).message
  }

  return 'Something went wrong.'
}
