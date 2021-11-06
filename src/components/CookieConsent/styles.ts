import styled from 'styled-components'

export const CookieConsentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  min-height: 80px;
  background: #222;
  color: #fff;

  button {
    white-space: nowrap;
    background: ${({ theme }) => theme.colors.warning};
    color: ${({ theme }) => theme.colors.warningText};
    border: none;
    height: 30px;
    padding: 8px;
    border-radius: 3px;
    cursor: pointer;
  }
`
