import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  max-height: calc(100vh - 120px);
  overflow-y: scroll;
  padding: 20px;
  padding-left: 30px;
`

export const Country = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 3px;
  margin: 10px 0px;
  background-color: var(--surface-bg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    background-color: var(--surface-hover);
  }
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0px 10px;
`

export interface SlugProps {
  count: number
}

export const Pages = styled.p<SlugProps>`
  border-radius: 15px;
  background-color: var(
    --${({ count }) => (count === 0 ? 'error' : 'primary')}
  );
  color: var(--bg-color);
  font-size: 12px;
  padding: 3px 7px;
  margin-left: 20px;
`

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
