import { DefaultTheme } from 'styled-components';

export type SVGType = React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
  title?: string | undefined;
}>;

export enum Theme {
  LIGHT,
  DARK,
  PINK,
}

export enum MenuItem {
  APP_TITLE,
  DASHBOARD,
  CHARTS,
  WALLETS,
  SETTINGS,
  ARROWS,
}

export enum Language {
  PL,
  EN
}

export interface ILanguageItem {
  type: Language,
  name: string,
  image: string
}

export interface ITheme extends DefaultTheme{
  id: Theme,
  menu: {
    text: {
      color: string
    }
    background: string,
    shadow: string,
    hover: string
    icon: string
  },
  toggleBtn: {
    background: string,
    icon: string,
  },
  globalBackground: string,
}

export interface IMenuItem {
  label: string,
  Icon: SVGType,
}

export interface IMenuOption extends IMenuItem {
  href: string
}

export interface IMenuProps {
  header: IMenuItem,
  items: IMenuOption[],
  bottom: IMenuItem
}

export interface ILayoutProps {
  children?: React.ReactNode;
}

export interface IToggleButtonProps {
  onToggle: () => void
}

export interface ILanguageChangerProps {
  title: string,
  lngItems: ILanguageItem[]
  changeLanguage: (lng: Language) => void
}
