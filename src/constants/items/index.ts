import {
  WalletLogo, Dashboard, Arrows, Charts, Settings, Wallet,
} from 'assets';

import { IMenuItem } from 'common/types';

export const MENU_ITEMS: IMenuItem[] = [
  {
    name: 'WalletViewer',
    Icon: WalletLogo,
    path: '',
  },
  {
    name: 'Dashboard',
    Icon: Dashboard,
    path: '/dashboard',
  },
  {
    name: 'Charts',
    Icon: Charts,
    path: '/charts',
  },
  {
    name: 'Wallets',
    Icon: Wallet,
    path: '/wallets',
  },
  {
    name: 'Settings',
    Icon: Settings,
    path: '/settings',
  },
  {
    name: 'Arrows',
    Icon: Arrows,
    path: '/arrows',
  },
];

export const TEMP = {

};
