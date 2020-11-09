import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --bg-color: ${props => props.theme.colors.background};
    --text-color: ${props => props.theme.colors.text};
    --primary: ${props => props.theme.colors.primary};
    --secondary: ${props => props.theme.colors.secondary};
    --error: ${props => props.theme.colors.error};
    --sidebar-bg: ${props => props.theme.colors.sidebar.background};
    --sidebar-hover: ${props => props.theme.colors.sidebar.hover};
    --sidebar-active: ${props => props.theme.colors.sidebar.active};
    --surface-bg: ${props => props.theme.colors.surface.background};
    --surface-hover: ${props => props.theme.colors.surface.hover};
    --header-bg: ${props => props.theme.colors.header.background};
    --header-text: ${props => props.theme.colors.header.text};
    --button-primary-text: ${props => props.theme.colors.button.primary.text};
    --button-primary-hover: ${props => props.theme.colors.button.primary.hover};
    --button-secondary-text: ${props =>
      props.theme.colors.button.secondary.text};
    --button-secondary-hover: ${props =>
      props.theme.colors.button.secondary.hover};
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
        width: 48px;
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

  .without-menu {
    margin: 0;
  }

  .container {
    width: 100%;

    div {
      width: 100%;

      p, ul {
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
    }
  }

  .container div ul {
    padding-left: 50px;
  }

  b::selection {
    background: var(--primary);
    color: #fff;
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

  .active {
    color: var(--text-color);
    background: var(--sidebar-active);
    display: block;
    width: 100%;
    line-height: 50px;
    text-decoration: none;
    padding-left: 40px;
    box-sizing: border-box;
    transition: 0.5s;
    border-radius: 2px;
    transition-property: background;
    cursor: default;

    &:hover {
      background: var(--sidebar-active);
    }
  }

  .div-active {
    background: var(--sidebar-active);
    cursor: default;

    &:hover {
      background: var(--sidebar-active);
    }
  }

  .custom-scrollbar {
    &::-webkit-scrollbar {
      width: 10px;
      background: var(--bg-color);
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 10px 10px var(--bg-color);
    }

    &::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 10px 10px var(--surface-bg);
      border: solid 2px transparent;
      border-radius: 10px;
    }
  }

  .elevate-hover {
    &:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
  }

  .elevate-1 {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }

  .elevate-2 {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  .elevate-3 {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }

  .elevate-4 {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  .elevate-5 {
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
`
