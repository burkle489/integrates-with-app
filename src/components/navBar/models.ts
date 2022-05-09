import { ChangeMe } from '../../App'

export type NavBarProps = {
    navItems: INavItem[]
    secondaryNavItems?: INavItem[]
}
export type INavItem = {
    route: string
    name: string
}
