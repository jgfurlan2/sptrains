import React from 'react'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { CookieConsent } from '~/components/CookieConsent'
import { Header } from '~/components/Header'
import { usePersistedState } from '~/hooks'
import { GlobalStyle } from '~/styles/global'
import { dark, light } from '~/styles/themes'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [themeType, setThemeType] = usePersistedState('theme', 'light')

  return (
    <ThemeProvider theme={themeType === 'light' ? light : dark}>
      <Header themeType={themeType} setThemeType={setThemeType} />
      <Component {...pageProps} />
      <CookieConsent />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
