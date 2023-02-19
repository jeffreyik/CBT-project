import { signOut } from "firebase/auth"
import { NavLink } from "react-router-dom"
import { auth } from "../firebase"

const AdminBar = () => {
    const navStyles = ({isActive}) => isActive ? "p-4 text-primary font-bold" : "p-4 text-secondary font-bold"
    const dropdownStyle = ({isActive}) => isActive ? "pl-10 mt-8 text-primary block font-bold" : "pl-10 mt-8 text-secondary block"
    return (
        <div className="sidebar h-100% fixed top-20 bottom-0">
        <div className="nav-links flex flex-col space-y-12 pt-12">
            <NavLink className={navStyles} to="/admin">
              Dashboard
            </NavLink>
            <NavLink className={navStyles} to="/admin-settings">
              Settings
            </NavLink>
            <div onClick={signOut(auth)} className="p-4 text-secondary font-bold">Logout</div>
        </div>
    </div>
    )
}

export default AdminBar