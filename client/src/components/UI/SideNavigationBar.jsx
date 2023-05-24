import { NavLink, Link } from "react-router-dom";

/* react icons */
import { RiDashboardFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { VscAdd } from "react-icons/vsc";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { MdBookmarkAdd } from "react-icons/md";

export default function SideNavigationBar() {
  return (
    <header>
      <nav className="side-nav">
        <ul className="w-80 h-full pl-6 fixed flex flex-col left-0 top-0 bg-accent text-white">
          <h1 className="font-semibold text-xl pl-1.5 mt-3 mb-6">
            <Link to="/">
              <MdBookmarkAdd className="inline h-12 w-12" />
              <span>Book Me</span>
            </Link>
          </h1>

          <li>
            <NavLink to="dashboard" className="nav-link">
              <RiDashboardFill className="side-nav-icons" />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="customers" className="nav-link">
              <HiUserGroup className="side-nav-icons" />
              <span>Customers</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="your-room" className="nav-link">
              <BsFillDoorOpenFill className="side-nav-icons" />
              <span>Your room</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="add-room" className="nav-link">
              <VscAdd className="side-nav-icons" />
              <span>Add rooms</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
