import { NavLink } from 'react-router-dom'
import PrimaryBtn from './PrimaryBtn';
import { courses } from '../constants/data';

const Sidebar = () => {
  const navStyles = ({isActive}) => isActive ? "p-4 text-primary font-bold" : "p-4 text-secondary font-bold"
  const dropdownStyle = ({isActive}) => isActive ? "pl-10 mt-8 text-primary block font-bold" : "pl-10 mt-8 text-secondary block"

  const dropdownEl = courses.map(course => (
    <NavLink key={course.id} to={`courses/${course.id}`} className={dropdownStyle}>{course.name}</NavLink>
  ))

  return (
    <div className="sidebar h-100% fixed top-20 bottom-0">
        <div className="nav-links flex flex-col space-y-12 pt-12">
            <NavLink className={navStyles} to="/">
              Dashboard
            </NavLink>
            <div>
              <NavLink className={navStyles} to={`courses/${courses[0].id}`}>
                Exam Papers
              </NavLink>
              <div className="dropdown">
                { dropdownEl }
              </div>
            </div>
            <NavLink className={navStyles} to="/settings">
              Settings
            </NavLink>
            <PrimaryBtn text="Start Exam" />
        </div>
    </div>
  )
}

export default Sidebar