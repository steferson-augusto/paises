import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --bg-color: ${props => props.theme.colors.background};
    --text-color: ${props => props.theme.colors.text};
    --primary: ${props => props.theme.colors.primary};
    --secondary: ${props => props.theme.colors.secondary};
    --sidebar-bg: ${props => props.theme.colors.sidebar.background};
    --sidebar-hover: ${props => props.theme.colors.sidebar.hover};
    --surface-bg: ${props => props.theme.colors.surface.background};
    --surface-hover: ${props => props.theme.colors.surface.hover};
    --header-bg: ${props => props.theme.colors.header.background};
    --header-text: ${props => props.theme.colors.header.text};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font: 400 16px Roboto, sans-serif;
  }

  #check {
    display: none;
    
    &:checked ~ .content{
      margin-left: 60px;
    }

    &:checked ~ .sidebar{
    left: -190px;

      a {
        font-size: 20px;
        margin-left: 190px;
        width: 60px;
        text-align: center;
        padding: 0;

        i {
          padding: 0;
        }

        span{
          display: none;
        }
      }

      .center {
        margin-left: 190px;
        img {
          width: 40px;
          padding-top: 10px;
        }

        h4 {
          display: none;
        }
      }
    }
  }

  .content{
    margin-left: 250px;
    padding-top: 40px;
    height: 100vh;
    transition: 0.5s;
  }

  .container {
    width: 100%;
  }

  .container div p {
    margin: auto;
    width: 90%;
    font-size: 16px;
    padding: 6px 20px;
    line-height: 1.5;

    &::selection {
      background: var(--primary);
      color: #fff;
    }
  }

  .container div a {
    text-decoration: none;
    color: var(--primary);
    font-size: 16px;

    &::selection {
      background: var(--primary);
      color: #fff;
    }
  }
`
