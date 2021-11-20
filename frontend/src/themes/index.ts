import { ITheme, Theme } from 'common/types';
import COLORS from 'constants/colors';

const DarkTheme: ITheme = {
  id: Theme.DARK,
  menu: {
    text: {
      color: COLORS.WHITE,
    },
    background: COLORS.MENU_BG_D,
    shadow: COLORS.SHADOW_BLACK,
    hover: COLORS.MENU_ITEM_BG_HOVER_D,
    icon: COLORS.ICON_D,
  },
  toggleBtn: {
    background: COLORS.TOGGLE_BTN_BG_D,
    icon: COLORS.TOGGLE_BTN_MOON,
  },
  globalBackground: COLORS.GLOBAL_BG_D,
};

const LightTheme: ITheme = {
  id: Theme.LIGHT,
  menu: {
    text: {
      color: COLORS.WHITE,
    },
    background: COLORS.MENU_BG_L,
    shadow: COLORS.SHADOW_WHITE,
    hover: COLORS.MENU_ITEM_BG_HOVER_L,
    icon: COLORS.ICON_L,
  },
  toggleBtn: {
    background: COLORS.TOGGLE_BTN_BG_L,
    icon: COLORS.TOGGLE_BTN_SUN,
  },
  globalBackground: COLORS.GLOBAL_BG_L,

};

export {
  DarkTheme,
  LightTheme,
};
