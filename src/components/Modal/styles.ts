import { transparentize } from 'polished'
import styled from 'styled-components'

export const ModalBackdrop = styled.div`
  z-index: 999999;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 16px;

  height: 100%;
  width: 100%;
  background: ${({ theme }) => transparentize(0.75, theme.colors.background)};
  backdrop-filter: blur(2px) grayscale(100%);

  > div {
    max-height: 100%;
    overflow: auto;
  }
`

export const ModalHeader = styled.div`
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 600;
  font-size: 20px;
`
