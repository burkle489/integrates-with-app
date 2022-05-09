import React from 'react';
import { Link } from 'react-router-dom';
import { ChangeMe } from '../../App';
import { NavItem } from '../navItem/NavItem';
import { INavItem, NavBarProps, } from './models';

export const NavBar: React.FC<NavBarProps> = ({ navItems }) => {
    return (
        <div className='NavBar'>
            {navItems.map((navItem: INavItem) => (
                <NavItem route={navItem.route} name={navItem.name} />
            ))}
            <div className='NavLogo'>
                <h1>
                    integrates with
                </h1>
            </div>
        </div>
    )
}