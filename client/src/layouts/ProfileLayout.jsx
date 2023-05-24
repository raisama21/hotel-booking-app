import { NavLink, Outlet } from "react-router-dom";

export default function ProfileLayout() {
  return (
    <div className="max-w-xxl mx-auto">
      <nav className="profile-nav mt-12 mb-8 flex gap-6">
        <NavLink
          to="profile"
          className="hover:text-dark/50 hover:transition-color hover:duration-200 hover:ease-in-out"
        >
          My Profile
        </NavLink>
        <NavLink
          to="bookings"
          className="hover:text-dark/50 hover:transition-color hover:duration-200 hover:ease-in-out"
        >
          Bookings
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
