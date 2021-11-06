/* eslint-disable indent */
import styled from 'styled-components'

interface ILineStatusCardContainerStyledProps {
  color: string
  text: string
}

export const LineStatusCardContainer = styled.div<ILineStatusCardContainerStyledProps>`
  height: var(--card-size);
  width: 100%;

  border: none;
  box-shadow: 0 1px 4px 0 ${({ theme }) => theme.colors.shadow};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  overflow: hidden;

  display: grid;
  grid-template-areas: 'I N S' 'SD SD SD' 'D D D';
  grid-template-columns: 40px 1fr 40px;
  grid-template-rows: 40px 40px 40px;
  align-items: center;

  transition: height 100ms linear;
  cursor: pointer;

  .name {
    grid-area: N;
    text-align: center;
    font-weight: 600;
  }

  .number {
    grid-area: I;

    box-shadow: 0 1px 4px 0 ${({ theme }) => theme.colors.shadow};

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 800;

    border-radius: 30px;
    height: 30px;
    width: 30px;

    margin: 5px;

    background: ${({ color }) => color};
    color: ${({ text }) => text};
  }

  .status-circle {
    grid-area: S;
    background: var(--status-color);
    margin: 10px;
    border-radius: 20px;
    height: 20px;
    width: 20px;
    box-shadow: 0 1px 4px 0 ${({ theme }) => theme.colors.shadow};
  }

  .status {
    grid-area: SD;
    opacity: var(--status-opacity);
    text-align: center;
    transition: opacity 100ms ease;

    span {
      font-weight: 800;
      color: var(--status-color);
    }

    button {
      margin-left: 5px;
      border: none;
      background: ${({ theme }) => theme.colors.warning};
      padding: 3px;
      border-radius: 3px;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.warningText};
    }
  }

  .details {
    grid-area: D;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
