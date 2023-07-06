import {
  FORM_EMAIL,
  FORM_MESSAGE,
  FORM_SUBJECT,
  FORM_CAPTCHA,
  FORM_LAST_NAME,
  FORM_FIRST_NAME
} from 'constants/index'

export interface IFormContact {
  [FORM_FIRST_NAME]: string
  [FORM_LAST_NAME]: string
  [FORM_EMAIL]: string
  [FORM_SUBJECT]: string
  [FORM_MESSAGE]: string
  [FORM_CAPTCHA]: string
}