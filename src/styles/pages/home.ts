import styled from 'styled-components'

export const LoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const HomeContainer = styled.main`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr;

  padding-top: 15px;
  padding-bottom: 15px;

  max-width: 576px;
`
