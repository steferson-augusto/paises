import { DefaultTheme } from 'styled-components'

const dark: DefaultTheme = {
  title: 'dark',

  colors: {
    text: '#E1E1E6',
    primary: '#BB86FC',
    secondary: '#03DAC6',

    background: '#121212',
    sidebar: {
      background: '#333',
      hover: '#222',
      active: '#444'
    },
    surface: {
      background: '#1F1F1F',
      hover: '#222'
    },
    header: {
      background: '#1F1F1F',
      text: '#E1E1E6'
    }
  }
}

export default dark
