import { Routes as MainRouters, Route } from 'react-router-dom';

import { Settings, Wallets, Page404, CreateWallet } from 'components';
import { MENU_OPTION_HREF, WALLETS_OPTION_HREF } from 'constants/items';

const Routes = (): JSX.Element => (
  <MainRouters>
    <Route element={<Wallets />} path={MENU_OPTION_HREF.WALLETS} />
    <Route element={<CreateWallet />} path={WALLETS_OPTION_HREF.CREATE} />
    <Route element={<Settings />} path={MENU_OPTION_HREF.SETTINGS} />
    <Route element={<Page404 />} path="*" />
  </MainRouters>
);

export default Routes;
