import {
  IExtendedOption,
  ILanguageItem,
  IOption,
  Language,
} from 'common/types';
import {
  WalletLogo,
  Dashboard,
  Arrows,
  Charts,
  Settings,
  Wallet,
  CreatePlusCircle,
} from 'assets/icons';
import { FlagPL, FlagGB } from 'assets/images';

export const MENU_ITEM = {
  APP_TITLE: 'APP_TITLE',
  DASHBOARD: 'DASHBOARD',
  CHARTS: 'CHARTS',
  WALLETS: 'WALLETS',
  SETTINGS: 'SETTINGS',
  ARROWS: 'ARROWS',
};

export const MENU_OPTION_HREF = {
  DASHBOARD: '/',
  CHARTS: '/charts',
  WALLETS: '/wallets',
  SETTINGS: '/settings',
};

export const WALLETS_OPTION_HREF = {
  CREATE: MENU_OPTION_HREF.WALLETS + '/create',
};

export const LNG_NAME = {
  PL: 'Polski',
  EN: 'English',
};

export const LNG_SHORTCUTNAME = {
  PL: 'pl',
  EN: 'en',
};

export const MENU_TOP: IOption = {
  label: MENU_ITEM.APP_TITLE,
  Icon: WalletLogo,
};

export const MENU_BOTTOM: IOption = {
  label: MENU_ITEM.ARROWS,
  Icon: Arrows,
};

export const MENU_OPTIONS: IExtendedOption[] = [
  {
    label: MENU_ITEM.DASHBOARD,
    Icon: Dashboard,
    href: MENU_OPTION_HREF.DASHBOARD,
  },
  {
    label: MENU_ITEM.CHARTS,
    Icon: Charts,
    href: MENU_OPTION_HREF.CHARTS,
  },
  {
    label: MENU_ITEM.WALLETS,
    Icon: Wallet,
    href: MENU_OPTION_HREF.WALLETS,
  },
  {
    label: MENU_ITEM.SETTINGS,
    Icon: Settings,
    href: MENU_OPTION_HREF.SETTINGS,
  },
];

export const WALLETS_OPTIONS: IExtendedOption[] = [
  {
    label: 'create wallet',
    Icon: CreatePlusCircle,
    href: '/wallets/create',
  },
];

// ! TODO: Probably, to delete, because it's never used
export const LNG_OPTIONS: ILanguageItem[] = [
  {
    type: Language.PL,
    name: LNG_NAME.PL,
    shortcut: LNG_SHORTCUTNAME.PL,
    image: FlagPL,
  },
  {
    type: Language.EN,
    name: LNG_NAME.EN,
    shortcut: LNG_SHORTCUTNAME.EN,
    image: FlagGB,
  },
];

export const LNG_OPTIONS2 = {
  PL: LNG_OPTIONS[0],
  EN: LNG_OPTIONS[1],
};
