import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--header-bg);
  padding: 20px;
  width: 100%;
  height: 30px;
`

export const Mark = styled.div`
  display: flex;
  flex: 1;
  justify-content: start;
  color: var(--header-text);

  label {
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      padding: 0px 10px;
    }
  }
`

export const Left = styled.div`
  h3 {
    margin: 0;
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 900;
    color: var(--header-text);
  }
`

export const Sidebar = styled.div`
  background: var(--sidebar-bg);
  margin-top: 40px;
  padding-bottom: 30px;
  padding-top: 0px;
  position: fixed;
  left: 0;
  width: 250px;
  height: 100%;
  transition: 0.5s;
  transition-property: left;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 10px;
    background: var(--sidebar-bg);
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px 10px var(--sidebar-bg);
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px var(--header-bg);
    border: solid 2px transparent;
    border-radius: 10px;
  }

  img {
    width: 100px;
    margin-bottom: 10px;
  }

  h4 {
    margin-top: 0;
    margin-bottom: 20px;
  }

  .link {
    color: var(--text-color);
    display: block;
    width: 100%;
    line-height: 50px;
    text-decoration: none;
    padding-left: 40px;
    box-sizing: border-box;
    transition: 0.5s;
    transition-property: background;

    &:hover {
      background: var(--sidebar-hover);
    }
  }

  i {
    padding-right: 10px;
  }
`

export const Center = styled.div`
  text-align: center;
  cursor: pointer;
  padding: 10px 0px;
  &:hover {
    background: var(--sidebar-hover);
  }
`
