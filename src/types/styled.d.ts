import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: 'dark' | 'light'

    colors: {
      primary: string
      primaryText: string
      secondary: string
      secondaryText: string

      info: string
      infoText: string
      warning: string
      warningText: string
      success: string
      successText: string
      error: string
      errorText: string

      background: string
      text: string

      shadow: string
    }

    toggleTheme: () => void
  }
}
