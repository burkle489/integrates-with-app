import { Link } from "react-router-dom"
import { INavItem } from "../navBar/models"

export const NavItem:React.FC<INavItem> =({route, name}) => {
    return (
        <div className="NavLink">
            <Link to={route} >{name}</Link>
        </div>
    )
}