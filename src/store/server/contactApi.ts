import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IFormContact } from 'types/forms.types'

export const contactApi = createApi({
  reducerPath: 'contact',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL ?? ''}/v1/portfolio`
  }),
  endpoints: build => ({
    sendEmail: build.mutation<void, IFormContact>({
      query: body => ({
        url: 'email',
        method: 'POST',
        body
      })
    })
  })
})

export const { useSendEmailMutation } = contactApi
