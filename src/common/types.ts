export type SVGType = React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
  title?: string | undefined;
}>;

export interface ITheme {
  id: string
}

export interface IMenuItem {
  name: string,
  Icon: SVGType,
  path: string
}

export interface IMenuItemProps {
  item: IMenuItem,
  isParentHover?: boolean
}

export interface IMenuProps {
  header: IMenuItem,
  items: IMenuItem[],
  bottom: IMenuItem
}

export interface ILayoutProps {
  children?: React.ReactNode;
}
