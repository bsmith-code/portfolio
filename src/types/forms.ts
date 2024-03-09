import {
  FORM_CAPTCHA,
  FORM_EMAIL,
  FORM_FIRST_NAME,
  FORM_LAST_NAME,
  FORM_MESSAGE,
  FORM_SUBJECT
} from 'constants/forms.constants'

export interface IFormContact {
  [FORM_FIRST_NAME]: string
  [FORM_LAST_NAME]: string
  [FORM_EMAIL]: string
  [FORM_SUBJECT]: string
  [FORM_MESSAGE]: string
  [FORM_CAPTCHA]: string
}
