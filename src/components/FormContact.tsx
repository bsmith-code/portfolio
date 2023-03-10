// Common
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// Redux
import { useSendEmailMutation } from 'redux/slices/contact'

// Components
import InputText from 'components/InputText'

// Styles
import {
  ButtonSubmit,
  ContactFormWrapper,
  ContactFormResponse
} from 'styles/components/contact.styles'

// Utils
import { schemaContactForm } from 'helpers'

// Constants
import {
  FORM_EMAIL,
  FORM_MESSAGE,
  FORM_SUBJECT,
  FORM_LAST_NAME,
  FORM_FIRST_NAME
} from 'constants/index'

// Types
import { IFormContact } from 'types'

const FormContact = () => {
  const [sendEmail, { isLoading, isSuccess }] = useSendEmailMutation()

  console.log(isLoading, isSuccess)
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
      [FORM_MESSAGE]: ''
    },
    resolver: yupResolver(schemaContactForm)
  })

  return (
    <ContactFormWrapper
      onSubmit={e => {
        void form.handleSubmit(handleSubmit)(e)
      }}
    >
      <InputText name={FORM_FIRST_NAME} label="First Name" form={form} />
      <InputText name={FORM_LAST_NAME} label="Last Name" form={form} />
      <InputText name={FORM_EMAIL} label="Email" form={form} />
      <InputText name={FORM_SUBJECT} label="Subject" form={form} />
      <InputText name={FORM_MESSAGE} label="Message" form={form} />

      <ButtonSubmit type="submit">Submit</ButtonSubmit>
    </ContactFormWrapper>
  )
}

export default FormContact
