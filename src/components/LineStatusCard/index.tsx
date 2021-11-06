import React, { useState } from 'react'

import { useTheme } from 'styled-components'

import { IStatusLine } from '~/types'
import { lineColors } from '~/utils/lineColors'

import { LineStatusCardContainer } from './styles'

interface IProps {
  line: IStatusLine
  onDetailsClick: (line: IStatusLine) => void
}

export const LineStatusCard: React.FC<IProps> = ({ line, onDetailsClick }) => {
  const color = lineColors(line.id)
  const [expanded, setExpanded] = useState(false)

  const theme = useTheme()

  const handleStatusColor = (): string => {
    if (line.status === 'Operação Normal') {
      return theme.colors.success
    }

    if (line.status === 'Paralisada') {
      return theme.colors.error
    }

    if (line.status === 'Operação Encerrada' || line.status === 'Operações Encerradas') {
      return '#A3A3A3'
    }

    return theme.colors.warning
  }

  return (
    <LineStatusCardContainer
      color={color.background}
      text={color.text}
      style={
        {
          '--card-size': expanded ? '80px' : '40px',
          '--status-opacity': expanded ? 1 : 0,
          '--status-color': handleStatusColor()
        } as unknown as React.CSSProperties
      }
      onClick={(e) => {
        e.stopPropagation()
        if ((e.target as HTMLElement).tagName !== 'BUTTON') {
          setExpanded((old) => !old)
        }
      }}
    >
      <div className="number">{line.id}</div>
      <div className="name">{line.name}</div>
      <div className="status-circle" />

      <div className="status">
        Status: <span>{line.status}</span>
        {line.details && <button onClick={() => onDetailsClick(line)}>Detalhes</button>}
      </div>
    </LineStatusCardContainer>
  )
}
