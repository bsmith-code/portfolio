// Common
import { FieldValues, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// Components
import InputText from 'components/InputText'

// Styles
import {
  ButtonSubmit,
  ContactFormWrapper,
  ContactFormResponse
} from 'styles/components/contact.styles'

// Constants
import {
  FORM_EMAIL,
  FORM_PHONE,
  FORM_MESSAGE,
  FORM_SUBJECT,
  FORM_LAST_NAME,
  FORM_FIRST_NAME
} from 'constants/index'

const validationSchema = yup.object({
  [FORM_FIRST_NAME]: yup.string().required('First name is required.'),
  [FORM_LAST_NAME]: yup.string().required('Last name is required.'),
  [FORM_EMAIL]: yup
    .string()
    .email('Invalid email.')
    .required('Email is required.'),
  [FORM_SUBJECT]: yup.string().required('Subject is required.'),
  [FORM_MESSAGE]: yup.string().required('Message is required.')
})

const handleSubmit = (data: FieldValues) => {
  console.log(data)
}

const FormContact = () => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema)
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
      <InputText name={FORM_PHONE} label="Phone" form={form} />
      <InputText name={FORM_SUBJECT} label="Subject" form={form} />
      <InputText name={FORM_MESSAGE} label="Message" form={form} />

      <ButtonSubmit type="submit">Submit</ButtonSubmit>
    </ContactFormWrapper>
  )
}

export default FormContact
