import styled from 'styled-components'
import { darken } from 'polished'

interface ContainerProps {
  visible: boolean
}

export const Container = styled.div<ContainerProps>`
  height: ${({ visible }) => (visible ? '100%' : '0%')};
  width: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: ${props => darken(0.1, props.theme.colors.background)};
  opacity: 0.97;
  overflow-x: hidden;
  transition: 0.5s;

  .modal-body {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }
`

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--header-bg);
  color: var(--header-text);
  padding: 20px;
  width: 100%;
  height: 30px;
  z-index: 1;
`

export const Close = styled.a`
  font-size: 26px;
  color: #ff4545;
`
