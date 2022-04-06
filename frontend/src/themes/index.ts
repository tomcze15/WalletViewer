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
    options: {
      selected: COLORS.DARK.MENU.OPTIONS.SELECTED,
      hover: COLORS.DARK.MENU.OPTIONS.HOVER,
    },
  },
  settings: {
    toggleBtn: {
      border: COLORS.TOGGLE_BORDER,
      background: COLORS.TOGGLE_BTN_BG_D,
      icon: COLORS.TOGGLE_BTN_MOON,
    },
    languageChanger: {
      background: COLORS.LNG_CHANGER_BG,
      contentShadow: COLORS.LNG_CHANGER_CONTENT_SHADOW,
      headerFont: COLORS.LNG_CHANGER_HEADER_FONT,
      item: {
        background: COLORS.LNG_CHANGER_OPT_BG,
        font: COLORS.LNG_CHANGER_OPT_FONTCOLOR,
        hover: COLORS.LNG_CHANGER_OPT_HOVER,
      },
    },
  },
  globalBackground: COLORS.GLOBAL_BG_D,
  button: {
    sides: {
      left: COLORS.DARK.BUTTON_L_SIDE,
      right: COLORS.DARK.BUTTON_R_SIDE,
    },
    text: '',
    icon: 'string',
  },
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
    options: {
      selected: COLORS.LIGHT.MENU.OPTIONS.SELECTED,
      hover: COLORS.LIGHT.MENU.OPTIONS.HOVER,
    },
  },
  settings: {
    toggleBtn: {
      border: COLORS.TOGGLE_BORDER,
      background: COLORS.TOGGLE_BTN_BG_L,
      icon: COLORS.TOGGLE_BTN_SUN,
    },
    languageChanger: {
      background: COLORS.LNG_CHANGER_BG,
      contentShadow: COLORS.LNG_CHANGER_CONTENT_SHADOW,
      headerFont: COLORS.LNG_CHANGER_HEADER_FONT,
      item: {
        background: COLORS.LNG_CHANGER_OPT_BG,
        font: COLORS.LNG_CHANGER_OPT_FONTCOLOR,
        hover: COLORS.LNG_CHANGER_OPT_HOVER,
      },
    },
  },
  globalBackground: COLORS.GLOBAL_BG_L,
  button: {
    sides: {
      left: COLORS.LIGHT.BUTTON_L_SIDE,
      right: COLORS.LIGHT.BUTTON_R_SIDE,
    },
    text: '',
    icon: 'string',
  },
};

export { DarkTheme, LightTheme };
