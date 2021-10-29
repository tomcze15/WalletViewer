export interface ITheme {
  id: string
}

export interface IMenuItem {
  name: string,
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>
}

export interface IMenuProps {
  items?: IMenuItem[]
}
