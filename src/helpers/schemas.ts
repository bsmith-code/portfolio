// Common
import * as yup from 'yup'

// Constants
import {
  FORM_EMAIL,
  FORM_PHONE,
  REGEX_PHONE,
  FORM_MESSAGE,
  FORM_SUBJECT,
  FORM_LAST_NAME,
  FORM_FIRST_NAME
} from 'constants/index'

export const schemaContactForm = yup.object({
  [FORM_FIRST_NAME]: yup.string().required('First name is required.'),
  [FORM_LAST_NAME]: yup.string().required('Last name is required.'),
  [FORM_EMAIL]: yup
    .string()
    .email('Email is invalid.')
    .required('Email is required.'),
  [FORM_PHONE]: yup.string().matches(REGEX_PHONE, {
    message: 'Invalid phone number.',
    excludeEmptyString: true
  }),
  [FORM_SUBJECT]: yup.string().required('Subject is required.'),
  [FORM_MESSAGE]: yup.string().required('Message is required.')
})
