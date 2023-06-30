// Common
import ReCAPTCHA from 'react-google-recaptcha'
import { useController, UseFormReturn } from 'react-hook-form'

// Styles
import { StyledInputError } from 'styles/components/contact.styles'

// Constants
import { FORM_CAPTCHA } from 'constants/index'

// Types
import { IFormContact } from 'types'

interface IProps {
  form: UseFormReturn<IFormContact>
}

const InputReCaptcha = ({ form }: IProps) => {
  const {
    field,
    fieldState: { error }
  } = useController({ name: FORM_CAPTCHA, control: form.control })

  const handleReCaptchaChange = (token: string) => {
    field.onChange(token)
  }
  const handleReCaptchaExpired = () => {
    form.setValue(FORM_CAPTCHA, '')
  }

  return (
    <fieldset>
      <ReCAPTCHA
        onChange={handleReCaptchaChange}
        onExpired={handleReCaptchaExpired}
        sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
      />
      {!!error && <StyledInputError>{error.message}</StyledInputError>}
    </fieldset>
  )
}

export default InputReCaptcha
