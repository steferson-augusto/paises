import { DefaultTheme } from 'styled-components'

const light: DefaultTheme = {
  title: 'light',

  colors: {
    text: '#333',
    primary: '#5e35b1',
    secondary: '#03DAC6',

    background: '#f5f5f5',
    sidebar: {
      background: '#E5E5E5',
      hover: '#D5D5D5',
      active: '#C5C5C5'
    },
    surface: {
      background: '#D5D5D5',
      hover: '#C5C5C5'
    },
    header: {
      background: '#5e35b1',
      text: '#E1E1E6'
    }
  }
}

export default light
