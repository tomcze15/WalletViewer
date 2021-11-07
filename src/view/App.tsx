import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';

import { LightTheme, DarkTheme } from 'themes';
import GlobalStyle from 'components/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from 'layout';
import Routes from 'components/Routes';
import { Theme } from 'common/types';

const App = (): JSX.Element => {
  const [theme, setTheme] = useState(DarkTheme);

  return (
    <ThemeProvider theme={{
      ...theme,
      setTheme: () => setTheme(({ id }) => (id === Theme.LIGHT ? DarkTheme : LightTheme)),
    }}
    >
      {/* eslint-disable react/jsx-props-no-spreading */}
      <GlobalStyle {...theme} />
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
