import { forwardRef, useCallback, useImperativeHandle, useState } from 'react'
import { Close, Container, Header } from './styles'

export interface ModalProps {
  openModal: () => void
  closeModal: () => void
}

interface Props {
  children: React.ReactNode
  title: string
}
const FullModal: React.ForwardRefRenderFunction<ModalProps, Props> = (
  { children, title },
  ref
) => {
  const [visible, setVisible] = useState(false)

  const openModal = useCallback(() => {
    setVisible(true)
  }, [visible])

  const closeModal = useCallback(() => {
    setVisible(false)
  }, [visible])

  useImperativeHandle(ref, () => ({ openModal, closeModal }))

  return (
    <Container visible={visible}>
      <Header>
        <h3>{title}</h3>
        <Close onClick={closeModal}>
          <i className="fa fa-times-circle" />
        </Close>
      </Header>
      <div className="modal-body">{children}</div>
    </Container>
  )
}

export default forwardRef(FullModal)
