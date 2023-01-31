// Common
import {
  useController,
  UseFormReturn,
  ControllerRenderProps,
  FieldValues
} from 'react-hook-form'

// Styles
import { InputError } from 'styles/components/contact.styles'

interface IProps {
  label?: string
  name: string
  form: UseFormReturn
}

const InputText = ({ label = '', name, form }: IProps) => {
  const {
    field,
    fieldState: { error }
  } = useController({ name, control: form.control })

  const { value, onChange } = field as Omit<
    ControllerRenderProps<FieldValues>,
    'value'
  > & {
    value: string
  }

  return (
    <fieldset>
      {!!label && <label htmlFor={`input-text-${name}`}>{label}</label>}
      <input
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        id={`input-text-${name}`}
      />
      {!!error && <InputError>{error.message}</InputError>}
    </fieldset>
  )
}

export default InputText
