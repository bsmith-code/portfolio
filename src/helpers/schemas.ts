import * as yup from 'yup'

import {
  FORM_CAPTCHA,
  FORM_EMAIL,
  FORM_FIRST_NAME,
  FORM_LAST_NAME,
  FORM_MESSAGE,
  FORM_SUBJECT
} from 'constants/index'

export const schemaContactForm = yup.object({
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
