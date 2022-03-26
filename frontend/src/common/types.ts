import { DefaultTheme } from 'styled-components';

export type SVGType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

export enum Currency {
  PL,
  USD,
  GBP,
  EUR,
  JPY,
}

export enum Theme {
  LIGHT,
  DARK,
  PINK,
}

export enum Language {
  PL,
  EN,
}

// ? Is this need
export interface ILanguageItem {
  type: Language;
  name: string;
  shortcut: string;
  image: string;
}

export interface ITheme extends DefaultTheme {
  id: Theme;
  menu: {
    text: {
      color: string;
    };
    background: string;
    shadow: string;
    hover: string;
    icon: string;
  };
  settings: {
    toggleBtn: {
      border: string;
      background: string;
      icon: string;
    };
    languageChanger: {
      background: string;
      contentShadow: string;
      headerFont: string;
      item: {
        background: string;
        font: string;
        hover: string;
      };
    };
  };
  globalBackground: string;
}

export interface IOption {
  label: string;
  Icon: SVGType;
}

export interface IExtendedOption extends IOption {
  href: string;
}

export interface IMenuProps {
  header: IOption;
  items: IExtendedOption[];
  bottom: IOption;
}

export interface ILayoutProps {
  children?: React.ReactNode;
}

export interface IToggleButtonProps {
  onToggle: () => void;
}

export interface ILanguageChangerProps {
  title: string;
  lngItems: ILanguageItem[];
  currentLng: Language;
  changeLanguage: (lng: Language) => void;
}

export interface ICreateWalletProps {
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeInitialBalance: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ITitlePageProps {
  title: string;
}
