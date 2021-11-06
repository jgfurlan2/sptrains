import React from 'react'

import { usePersistedState } from '~/hooks'

import { CookieConsentContainer } from './styles'

export const CookieConsent: React.FC = () => {
  const endOfYear = new Date(new Date().getFullYear(), 11, 31, 23, 59, 59).getTime()
  const [cookieConsent, setCookieConsent] = usePersistedState('cookieConsent', false, endOfYear)

  if (cookieConsent === true) {
    return <></>
  }

  return (
    <CookieConsentContainer>
      Este site utiliza cookies para melhorar a experiência do usuário.
      <button onClick={() => setCookieConsent(true)}>Eu compreendo</button>
    </CookieConsentContainer>
  )
}
