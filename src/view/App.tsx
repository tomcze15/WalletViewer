import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';

import { LightTheme } from 'themes';
import Menu from 'components/Menu';
import GlobalStyle from 'components/GlobalStyle';
import { MENU_ITEMS } from 'constants/items';

const App = (): JSX.Element => {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyle />
      <Menu items={MENU_ITEMS} />
    </ThemeProvider>
  );
};

export default App;
