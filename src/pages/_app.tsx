import { useState, useCallback, useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(light)

  useEffect(() => {
    const storageValue = localStorage.getItem('@Paises:theme')

    if (storageValue) {
      setTheme(JSON.parse(storageValue) === 'light' ? light : dark)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('@Paises:theme', JSON.stringify(theme.title))
  }, [theme])

  const toogleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  }, [theme])

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} toogleTheme={toogleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
