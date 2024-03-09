import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useSendEmailMutation } from 'store/server/contactApi'

import { InputReCaptcha } from 'components/InputReCaptcha'
import { InputText } from 'components/InputText'

import {
  StyledButtonSubmit,
  StyledFormResponse,
  StyledFormWrapper,
  StyledInputError
} from 'styles/components/contact.styles'

import { getQueryError } from 'utils/errors.utils'

import {
  FORM_CAPTCHA,
  FORM_EMAIL,
  FORM_FIRST_NAME,
  FORM_LAST_NAME,
  FORM_MESSAGE,
  FORM_SUBJECT
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
  [FORM_CAPTCHA]: yup.string().required('Recaptcha is required.')
})

export const FormContact = () => {
  const [sendEmail, { error, isLoading, isSuccess }] = useSendEmailMutation()

  const handleSubmit = async (formData: IFormContact) => {
    await sendEmail(formData)
  }

  const form = useForm<IFormContact>({
    mode: 'onChange',
    defaultValues: {
      [FORM_FIRST_NAME]: '',
      [FORM_LAST_NAME]: '',
      [FORM_EMAIL]: '',
      [FORM_SUBJECT]: '',
      [FORM_MESSAGE]: '',
      [FORM_CAPTCHA]: ''
    },
    resolver: yupResolver(contactSchema)
  })

  const formError = error && getQueryError(error)

  return isSuccess ? (
    <StyledFormResponse>Message sent successfully</StyledFormResponse>
  ) : (
    <StyledFormWrapper
      onSubmit={e => {
        void form.handleSubmit(handleSubmit)(e)
      }}
    >
      <InputText name={FORM_FIRST_NAME} label="First Name" form={form} />
      <InputText name={FORM_LAST_NAME} label="Last Name" form={form} />
      <InputText name={FORM_EMAIL} label="Email" form={form} />
      <InputText name={FORM_SUBJECT} label="Subject" form={form} />
      <InputText name={FORM_MESSAGE} label="Message" form={form} />
      <InputReCaptcha form={form} />
      <StyledButtonSubmit disabled={isLoading} type="submit">
        {isLoading ? 'Submitting...' : 'Submit'}
      </StyledButtonSubmit>
      {formError && <StyledInputError>{formError}</StyledInputError>}
    </StyledFormWrapper>
  )
}
