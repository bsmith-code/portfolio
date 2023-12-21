import {
  FieldValues,
  Path,
  useController,
  UseFormReturn
} from 'react-hook-form'

import { StyledInputError } from 'styles/components/contact.styles'

interface IProps<T extends FieldValues> {
  label?: string
  name: Path<T>
  form: UseFormReturn<T>
}

export const InputText = <T extends FieldValues>({
  label = '',
  name,
  form
}: IProps<T>) => {
  const {
    field,
    fieldState: { error }
  } = useController({ name, control: form.control })

  const { value, onChange: handleChange } = field

  return (
    <fieldset>
      {!!label && <label htmlFor={`input-text-${name}`}>{label}</label>}
      <input
        name={name}
        type="text"
        value={value}
        onChange={handleChange}
        id={`input-text-${name}`}
      />
      {!!error && <StyledInputError>{error.message}</StyledInputError>}
    </fieldset>
  )
}
