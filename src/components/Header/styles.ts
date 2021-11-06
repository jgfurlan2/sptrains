import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 50px;

  padding: 5px;
  margin-bottom: 10px;

  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 1px 4px 0 ${({ theme }) => theme.colors.shadow};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .logo-container {
    font-weight: 600;
    img {
      height: 30px;
    }
  }

  .toggle-theme {
  }
`
