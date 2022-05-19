import React from 'react';
import { NavItem } from '../navItem/NavItem';
import { INavItem, NavBarProps } from './models';

export const NavBar: React.FC<NavBarProps> = ({ navItems, secondaryNavItems }) => {
    return (
        <div className='NavBar'>
            <div className='NavContainer'>
                {navItems.map((navItem: INavItem) => (
                    <NavItem route={navItem.route} name={navItem.name} />
                ))}
            </div>
            <div className='NavLogo'>
                <h1>
                    integrates with
                </h1>
            </div>
            <div className='NavContainer'>
                {secondaryNavItems && secondaryNavItems.map((navItem: INavItem) => (
                    <NavItem route={navItem.route} name={navItem.name} />
                ))}
            </div>
        </div>
    )
}