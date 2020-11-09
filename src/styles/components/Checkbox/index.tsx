import { InputHTMLAttributes } from 'react'
import { Container } from './styles'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
}

const Checkbox: React.FC<CheckboxProps> = ({ title, ...rest }) => {
  return (
    <Container>
      <input type="checkbox" {...rest} />
      <span>{title}</span>
    </Container>
  )
}

export default Checkbox
