import { InputHTMLAttributes } from 'react'
import { InputField, Message } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  error: boolean
  message: string
}

const Input: React.FC<Props> = ({
  name,
  label,
  error,
  message = '',
  ...rest
}) => {
  return (
    <InputField error={error}>
      <input id={name} {...rest} />
      <label htmlFor={name}>{label}</label>

      {message.length > 0 && <Message error={error}>{message}</Message>}
    </InputField>
  )
}

export default Input
