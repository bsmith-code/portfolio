import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useSendEmailMutation } from 'store/server/contactApi'

import { InputReCaptcha } from 'components/InputReCaptcha'
import { InputText } from 'components/InputText'

import {
  StyledButtonSubmit,
  StyledFormResponse,
  StyledFormWrapper,
  StyledInputError
} from 'styles/components/contact.styles'

import { getQueryError, schemaContactForm } from 'helpers'

import {
  FORM_CAPTCHA,
  FORM_EMAIL,
  FORM_FIRST_NAME,
  FORM_LAST_NAME,
  FORM_MESSAGE,
  FORM_SUBJECT
} from 'constants/forms.constants'

import { IFormContact } from 'types'

export const FormContact = () => {
  // Composition
  const [sendEmail, { error, isLoading, isSuccess }] = useSendEmailMutation()

  // Form
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
    resolver: yupResolver(schemaContactForm)
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
