import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    overflow: auto;
  }

  html, body, #__next {
    height: 100%;
    overflow: auto;
  }

  *, button, input {
    outline: 0;
    font: 14px "Roboto", -apple-system, system-ui, sans-serif;

    ::placeholder, ::-ms-input-placeholder, :-ms-input-placeholder {
      font-family: "Roboto", -apple-system, system-ui, sans-serif;
    }
  }

  svg {
    color: ${({ theme }) => theme.colors.text};
  }

  main {
    margin: 0 auto;

    @media (max-width: 576px) {
      padding: 0 15px;
    }

    @media (min-width: 576px) {
      max-width: 540px;
    }

    @media (min-width: 768px) {
      max-width: 720px;
    }

    @media (min-width: 992px) {
      max-width: 960px;
    }

    @media (min-width: 1200px) {
      max-width: 1140px;
    }
  }
`
