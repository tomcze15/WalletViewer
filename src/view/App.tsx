import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';

import { LightTheme } from 'themes';
import GlobalStyle from 'components/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from 'layout';

const App = (): JSX.Element => {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyle />
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
};

export default App;
