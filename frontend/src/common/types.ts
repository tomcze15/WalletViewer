import { DefaultTheme } from 'styled-components';

export type SVGType = React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
  title?: string | undefined;
}>;

export enum Theme {
  LIGHT,
  DARK,
  PINK,
}

export enum Language {
  PL,
  EN
}

// Is it neccessary?
export interface ILanguageItem {
  type: Language,
  name: string,
  shortcut: string;
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
  settings: {
    toggleBtn: {
      border: string,
      background: string,
      icon: string,
    },
    languageChanger: {
      background: string,
      contentShadow: string,
      headerFont: string,
      item: {
        background: string,
        font: string,
        hover: string
      }
    }
  }
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
  lngItems: ILanguageItem[],
  currentLng: Language,
  changeLanguage: (lng: Language) => void
}
