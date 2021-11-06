import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import Switch from 'react-switch'

import { shade } from 'polished'
import { useTheme } from 'styled-components'

import { HeaderContainer } from './styles'

interface IProps {
  themeType: 'dark' | 'light'
  setThemeType: React.Dispatch<React.SetStateAction<'dark' | 'light'>>
}

export const Header: React.FC<IProps> = ({ setThemeType, themeType }) => {
  const theme = useTheme()

  return (
    <HeaderContainer>
      <div className="logo-container">
        <img src="assets/favicon.png" alt="logo" />
        SPTrains
      </div>
      <div className="toggle-theme">
        <FaSun />
        <Switch
          onChange={() => setThemeType((old) => (old === 'dark' ? 'light' : 'dark'))}
          checked={themeType === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          offColor={shade(0.1, theme.colors.background)}
          onColor={theme.colors.secondary}
          height={10}
          width={40}
          handleDiameter={20}
        />
        <FaMoon />
      </div>
    </HeaderContainer>
  )
}
