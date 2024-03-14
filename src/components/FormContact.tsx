import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useSendEmailMutation } from 'store/server/contactApi'

import { Alert, Button, Snackbar } from '@mui/material'

import { InputReCaptcha } from 'components/InputReCaptcha'
import { InputText } from 'components/InputText'

import { getQueryError } from 'utils/errors.utils'

import {
  FORM_CAPTCHA,
  FORM_EMAIL,
  FORM_FIRST_NAME,
  FORM_LAST_NAME,
  FORM_MESSAGE,
  FORM_SUBJECT,
} from 'constants/forms.constants'

import { IFormContact } from 'types/forms.types'

export const contactSchema = yup.object({
  [FORM_FIRST_NAME]: yup.string().required('First name is required.'),
  [FORM_LAST_NAME]: yup.string().required('Last name is required.'),
  [FORM_EMAIL]: yup
    .string()
    .email('Email is invalid.')
    .required('Email is required.'),

  [FORM_SUBJECT]: yup.string().required('Subject is required.'),
  [FORM_MESSAGE]: yup.string().required('Message is required.'),
  [FORM_CAPTCHA]: yup.string().required('Recaptcha is required.'),
})

export const FormContact = () => {
  const [sendEmail, { error, isLoading, isSuccess }] = useSendEmailMutation()

  const form = useForm<IFormContact>({
    mode: 'onChange',
    defaultValues: {
      [FORM_FIRST_NAME]: '',
      [FORM_LAST_NAME]: '',
      [FORM_EMAIL]: '',
      [FORM_SUBJECT]: '',
      [FORM_MESSAGE]: '',
      [FORM_CAPTCHA]: '',
    },
    resolver: yupResolver(contactSchema),
  })

  const handleSubmit = form.handleSubmit(async (formData: IFormContact) => {
    await sendEmail(formData)
  })

  const preparedFields = [
    { name: FORM_FIRST_NAME, label: 'First Name' },
    { name: FORM_LAST_NAME, label: 'Last Name' },
    { name: FORM_EMAIL, label: 'Email' },
    { name: FORM_SUBJECT, label: 'Subject' },
    { name: FORM_MESSAGE, label: 'Message' },
  ]

  const isOpen = !!error || isSuccess
  const message = error ? getQueryError(error) : 'Form submitted successfully.'

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        {preparedFields.map(({ name, label }) => (
          <InputText sx={{ mb: 2 }} name={name} label={label} form={form} />
        ))}

        <InputReCaptcha form={form} />
        <Button disabled={isLoading} type="submit" variant="contained">
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
      <Snackbar open={isOpen} autoHideDuration={6000}>
        <Alert variant="filled" severity={error ? 'error' : 'success'}>
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}
