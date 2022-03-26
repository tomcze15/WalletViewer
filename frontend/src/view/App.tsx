import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'normalize.css';

import { LightTheme, DarkTheme } from 'themes';
import { GlobalStyle, Routes } from 'components';
import { Theme } from 'common/types';
import Layout from 'layout';

const App = (): JSX.Element => {
  const [theme, setTheme] = useState(DarkTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () =>
          setTheme(({ id }) => (id === Theme.LIGHT ? DarkTheme : LightTheme)),
      }}
    >
      <HelmetProvider>
        <GlobalStyle {...theme} />
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default App;
