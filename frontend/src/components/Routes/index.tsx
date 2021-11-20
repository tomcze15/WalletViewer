import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Settings from 'components/Settings';
import Wallets from 'components/Wallets';
import Page404 from 'components/Page404';
import { MENU_OPTION_HREF } from 'constants/items';

const Routes = (): JSX.Element => (
  <Switch>
    <Route
      component={Wallets}
      exact
      path={MENU_OPTION_HREF.WALLETS}
    />
    <Route
      component={Settings}
      exact
      path={MENU_OPTION_HREF.SETTINGS}
    />
    <Route
      component={Page404}
      path="/notFound"
    />
    <Redirect to="/notFound" />
  </Switch>
);

export default Routes;
