import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  max-height: calc(100vh - 120px);
  overflow-y: scroll;
`

export const Country = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  margin: 3px 0px;
  background-color: var(--surface-bg);

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
