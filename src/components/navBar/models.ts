import { ChangeMe } from '../../App';

export type NavBarProps = {
    navItems: INavItem[];
};
export type INavItem = {
    route: string;
    name: string;
}