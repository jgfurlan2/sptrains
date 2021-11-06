import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export const Portal: React.FC = ({ children }) => {
  const [portalRoot, setPortalRoot] = useState<HTMLDivElement>()

  function getOrCreatePluginRoot(): HTMLDivElement {
    const id = 'methone-portal-root'
    let portalRoot = document.querySelector(`#${id}`) as HTMLDivElement

    if (!portalRoot) {
      portalRoot = document.createElement('div')
      portalRoot.id = id

      document.body.appendChild(portalRoot)
    }

    return portalRoot
  }

  useEffect(() => {
    setPortalRoot(getOrCreatePluginRoot())
  }, [])

  if (portalRoot) {
    return createPortal(children, portalRoot)
  }

  return <></>
}
