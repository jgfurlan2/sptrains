import { transparentize } from 'polished'
import { DefaultTheme } from 'styled-components'

const colors: DefaultTheme['colors'] = {
  primary: '#e9e9e9',
  primaryText: '#FFFFFF',
  secondary: '#613DC1',
  secondaryText: '#FFFFFF',

  info: '#2A9D8F',
  infoText: '#222222',
  success: '#3E8914',
  successText: '#FFFFFF',
  warning: '#F5BB00',
  warningText: '#000',
  error: '#AD2E24',
  errorText: '#FFFFFF',

  background: '#F1F1F1',
  text: '#333333',
  shadow: transparentize(0.8, '#000')
}

const light: DefaultTheme = {
  title: 'light',

  colors,
  toggleTheme: () => {}
}

const dark: DefaultTheme = {
  title: 'dark',

  colors: {
    ...colors,
    primary: '#333333',

    background: '#222222',
    text: '#FFFFFF'
  },

  toggleTheme: () => {}
}

export { light, dark }
