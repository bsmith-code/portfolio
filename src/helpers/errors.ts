import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
const isFetchBaseQueryError = (error: unknown): error is FetchBaseQueryError =>
  typeof error === 'object' && error != null && 'status' in error

/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
const isErrorWithMessage = (error: unknown): error is { message: string } =>
  typeof error === 'object' &&
  error != null &&
  'message' in error &&
  typeof (error as Error).message === 'string'

export const getQueryError = (error: unknown) => {
  if (isFetchBaseQueryError(error)) {
    // you can access all properties of `FetchBaseQueryError` here
    return 'error' in error ? error.error : JSON.stringify(error.data)
  }

  if (isErrorWithMessage(error)) {
    // you can access a string 'message' property here
    return error.message
  }
}
