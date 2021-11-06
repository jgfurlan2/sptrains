import React, { useRef, useEffect, MouseEventHandler } from 'react'
import { FaTimes } from 'react-icons/fa'

import { Button } from '../Button'
import { Card } from '../Card'
import { Portal } from '../Portal'
import { ModalBackdrop, ModalHeader } from './styles'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  backdropClose?: boolean
  escapeClose?: boolean
  header?: true | string | JSX.Element
  style?: React.CSSProperties
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { children, isOpen, onClose, backdropClose = true, escapeClose = true, header, style } = props
  const backdropRef = useRef(null)

  const escapeDetect = (evt: KeyboardEvent): void => {
    if (evt.key === 'Escape') {
      onClose()
    }
  }

  const onBackdropClick: MouseEventHandler<HTMLDivElement> = (evt) => {
    if (backdropRef.current) {
      if (backdropRef.current === evt.target && backdropClose) {
        onClose()
      }
    }
  }

  useEffect(() => {
    if (escapeClose) {
      addEventListener('keydown', escapeDetect)
    }

    return () => {
      if (escapeClose) {
        removeEventListener('keydown', escapeDetect)
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (!isOpen) {
    return <></>
  }

  return (
    <Portal>
      <ModalBackdrop ref={backdropRef} onClick={onBackdropClick}>
        <Card style={{ ...style }}>
          {header && (
            <ModalHeader>
              <Button variant="error" onClick={onClose}>
                <FaTimes />
              </Button>
              {typeof header !== 'boolean' && header}
            </ModalHeader>
          )}
          {children}
        </Card>
      </ModalBackdrop>
    </Portal>
  )
}
