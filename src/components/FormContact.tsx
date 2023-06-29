// Common
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// Redux
import { useSendEmailMutation } from 'redux/slices/contact'

// Components
import InputText from 'components/InputText'
import InputReCaptcha from 'components/InputReCaptcha'

// Styles
import {
  StyledButtonSubmit,
  StyledFormWrapper,
  StyledFormResponse,
  StyledInputError
} from 'styles/components/contact.styles'

// Utils
import { getQueryError, schemaContactForm } from 'helpers'

// Constants
import {
  FORM_EMAIL,
  FORM_MESSAGE,
  FORM_SUBJECT,
  FORM_CAPTCHA,
  FORM_LAST_NAME,
  FORM_FIRST_NAME
} from 'constants/index'

// Types
import { IFormContact } from 'types'

const FormContact = () => {
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
    }
    // resolver: yupResolver(schemaContactForm)
  })

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
        {isLoading ? 'Submitting' : 'Submit'}
      </StyledButtonSubmit>
      {error && <StyledInputError>{getQueryError(error)}</StyledInputError>}
    </StyledFormWrapper>
  )
}

export default FormContact
