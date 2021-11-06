import { shade } from 'polished'
import styled from 'styled-components'

type ThemeVariant = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info'

export const Card = styled.div<{ variant?: ThemeVariant; shade?: number }>`
  position: relative;
  background: ${({ theme, variant, shade: shadeValue }) => shade(shadeValue || 0, theme.colors[variant || 'primary'])};
  box-shadow: 0 1px 4px 0 ${({ theme }) => theme.colors.shadow};
  border-radius: 10px;
  padding: 16px;
`
