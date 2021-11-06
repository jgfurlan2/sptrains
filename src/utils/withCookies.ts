import { NextApiRequest, NextApiResponse, NextPageContext } from 'next'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

import { Storage } from '~/types'

type ParseCookiesCTX = Pick<NextPageContext, 'req'> | { req: NextApiRequest } | null | undefined
type SetCookiesCTX = Pick<NextPageContext, 'res'> | { res: NextApiResponse } | null | undefined

export const withCookies = {
  getItem<T extends keyof Storage>(path: T, ctx?: ParseCookiesCTX): Storage[T] | null {
    const { [`${process.env.COOKIE_BASE}/${path}`]: value } = parseCookies(ctx)

    if (value !== undefined) {
      return JSON.parse(value)
    }

    return null
  },

  setItem<T extends keyof Storage>(path: T, value: Storage[T] | null, expiresIn?: number, setCookiesCTX?: SetCookiesCTX): void {
    if (value) {
      setCookie(setCookiesCTX, `${process.env.COOKIE_BASE}/${path}`, JSON.stringify(value), {
        maxAge: expiresIn || 60 * 60 * 24, // 24 hours
        sameSite: 'strict',
        secure: process.env.NODE_ENV !== 'development'
      })
    } else {
      destroyCookie(setCookiesCTX, `${process.env.COOKIE_BASE}/${path}`)
    }
  }
}
