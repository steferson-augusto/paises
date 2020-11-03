import { Container, Close } from './styles'

interface ModalProps {
  id?: string
}

const Modal: React.FC<ModalProps> = ({ children, id = 'modal' }) => {
  return (
    <Container id={id}>
      <Close href="#">x</Close>
      {children}
    </Container>
  )
}

export default Modal
