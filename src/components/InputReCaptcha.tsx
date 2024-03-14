import ReCAPTCHA from 'react-google-recaptcha'
import { useController, UseFormReturn } from 'react-hook-form'

import { FormHelperText, Stack } from '@mui/material'

import { FORM_CAPTCHA } from 'constants/forms.constants'

import { IFormContact } from 'types/forms.types'

interface IProps {
  form: UseFormReturn<IFormContact>
}

export const InputReCaptcha = ({ form }: IProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name: FORM_CAPTCHA, control: form.control })

  const handleReCaptchaChange = (token: string | null) => {
    if (!token) return
    field.onChange(token)
  }
  const handleReCaptchaExpired = () => {
    form.setValue(FORM_CAPTCHA, '')
  }

  return (
    <Stack mb={2}>
      <ReCAPTCHA
        onChange={handleReCaptchaChange}
        onExpired={handleReCaptchaExpired}
        sitekey={process.env.REACT_APP_RECAPTCHA_KEY ?? ''}
      />
      {!!error && <FormHelperText error>{error.message}</FormHelperText>}
    </Stack>
  )
}
