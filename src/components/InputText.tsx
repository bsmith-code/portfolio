import {
  FieldValues,
  Path,
  useController,
  UseFormReturn,
} from 'react-hook-form'

import { BaseTextFieldProps, Stack, TextField } from '@mui/material'

interface IProps<T extends FieldValues> extends BaseTextFieldProps {
  label?: string
  name: Path<T>
  form: UseFormReturn<T>
}

export const InputText = <T extends FieldValues>({
  label = '',
  name,
  form,
  ...restProps
}: IProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control: form.control })

  return (
    <Stack>
      <TextField
        {...field}
        fullWidth
        name={name}
        label={label}
        error={!!error}
        variant="outlined"
        helperText={error?.message}
        {...restProps}
      />
    </Stack>
  )
}
