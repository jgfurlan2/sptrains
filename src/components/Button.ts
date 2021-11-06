import { shade } from 'polished'
import styled, { css } from 'styled-components'

interface ButtonStyledProps {
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  customColor?: string
  customTextColor?: string
  customShadow?: string
  uppercase?: boolean
}

export const Button = styled.button<ButtonStyledProps>`
  min-height: 34px;
  min-width: 34px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 250ms ease;
  gap: 10px;

  :disabled {
    cursor: not-allowed;
  }

  ${({ theme, customColor, customShadow, customTextColor, variant }) => css`
    background: ${customColor || theme.colors[variant || 'secondary']};
    color: ${customTextColor || theme.colors[`${variant || 'secondary'}Text`]};
    box-shadow: 0 1px 4px 0 ${customShadow || theme.colors.shadow};

    svg {
      color: ${customTextColor || theme.colors[`${variant || 'secondary'}Text`]};
    }

    :hover {
      background: ${shade(0.2, customColor || theme.colors[variant || 'secondary'])};
    }

    :disabled {
      background: ${shade(0.25, customColor || theme.colors[variant || 'secondary'])};
    }
  `}
`
