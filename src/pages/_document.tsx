import React from 'react'

import Document, { DocumentInitialProps, DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage({ enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />) })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,600" />
          <link rel="shortcut icon" href="assets/favicon.png" type="image/png" />
          <link rel="manifest" href="manifest.json"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
