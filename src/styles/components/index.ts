import styled from 'styled-components'
import { darken } from 'polished'

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 25px;
  text-transform: uppercase;
  text-align: center;
  padding: 15px 0px;

  &::selection {
    background: var(--primary);
    color: #fff;
  }
`

export const Subtitle = styled.h3`
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
  padding: 15px 0px;

  &::selection {
    background: var(--primary);
    color: #fff;
  }
`

export const Description = styled.p`
  width: 90%;
  font-size: 16px;
  padding: 6px 20px;
  line-height: 1.4;
`

export const ContainerImages = styled.div`
  width: 90%;
  padding: 15px 0px;
  padding-top: 40px;
  display: flex;
  justify-content: space-around;
`

export const Redirect = styled.a`
  text-decoration: none;
  color: var(--primary);
  font-size: 16px;
`

export const AddButton = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 40px;
  text-align: center;
  background-color: var(--secondary);
  color: #fff;
  text-decoration: none;
  position: absolute;
  bottom: 30px;
  margin: auto;
  cursor: pointer;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export interface IconButtonProps {
  color?: string
}

export const IconButton = styled.a<IconButtonProps>`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 30px;
  text-align: center;
  background-color: ${({ color }) =>
    color.length > 0 ? color : 'var(--primary)'};
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  margin: 0px 3px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    background-color: ${({ color, theme }) =>
      color.length > 0
        ? darken(0.15, color)
        : darken(0.15, theme.colors.primary)};
  }
`
