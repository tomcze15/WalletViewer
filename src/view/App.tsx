import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';

import { LightTheme } from 'themes';
import StartPage from 'components/StartPage';

const App = (): JSX.Element => {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider theme={{
      ...theme,
    }}
    >
      <StartPage />
    </ThemeProvider>
  );
};

export default App;
