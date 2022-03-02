import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { ToggleThemeButton, LanguageChanger } from 'components';

const SettingsWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding-top: 7%;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

const Settings = (): JSX.Element => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <SettingsWrapper>
      <ToggleThemeButton onToggle={setTheme} />
      <LanguageChanger />
    </SettingsWrapper>
  );
};

export default Settings;