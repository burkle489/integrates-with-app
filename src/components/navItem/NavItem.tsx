import { Link, useLocation } from "react-router-dom"
import { INavItem } from "../navBar/models"

export const NavItem: React.FC<INavItem> = ({ route, name }) => {
    const location = useLocation();
    const isCurrentLocation = location.pathname === route
    return (
        <div className={`NavItem${isCurrentLocation ? ' Active' : ''}`}>
            <Link to={route}>{name}</Link>
        </div>
    )
}