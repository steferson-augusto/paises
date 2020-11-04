import { forwardRef, useCallback, useImperativeHandle, useState } from 'react'
import { Container, Close } from './styles'

export interface ModalProps {
  openModal: () => void
}

interface Props {
  children: React.ReactNode
}

const Modal: React.ForwardRefRenderFunction<ModalProps, Props> = (
  { children },
  ref
) => {
  const [visible, setVisible] = useState(true)

  const openModal = useCallback(() => {
    setVisible(true)
  }, [visible])

  useImperativeHandle(ref, () => ({ openModal }))

  const handleCloseModal = useCallback(() => {
    setVisible(false)
  }, [visible])

  if (!visible) return null

  return (
    <Container>
      <Close onClick={handleCloseModal}>x</Close>
      {children}
    </Container>
  )
}

export default forwardRef(Modal)
