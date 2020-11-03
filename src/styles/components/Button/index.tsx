import { Container, ButtonProps } from './styles'

const Button: React.FC<ButtonProps> = ({
  children,
  primary = true,
  ...rest
}) => {
  return (
    <Container primary={primary} {...rest}>
      {children}
    </Container>
  )
}

export default Button
