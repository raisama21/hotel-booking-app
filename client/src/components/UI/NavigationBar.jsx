import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useCookies } from "react-cookie";

/* react icons */
import { MdBookmarkAdd } from "react-icons/md";

export default function NavigationBar() {
  const [{ user_info }, removeCookie] = useCookies(["user_info"]);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleLogout = () => {
    removeCookie("user_info");
  };

  return (
    <header>
      <nav className="flex items-center px-6 bg-accent text-white font-medium shadow-lg">
        <h1 className="font-semibold text-xl text-white mr-auto">
          <Link to="/">
            <MdBookmarkAdd className="inline h-12 w-12 fill-white" />
            <span>Book Me</span>
          </Link>
        </h1>

        <div className="flex items-center gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="rooms">Room</NavLink>
          {!user_info?.token && (
            <>
              <NavLink to="signup">Signup</NavLink>
              <NavLink to="login">Login</NavLink>
            </>
          )}

          {user_info?.token && (
            <div className="relative">
              <div
                className="flex items-center gap-2 pr-2 border-2 border-white rounded-full cursor-pointer"
                onClick={() => setShowDropDown((oldData) => !oldData)}
              >
                <img src="/avatar.jpg" className="w-10 h-10 rounded-full" />
                <p>{user_info?.username}</p>
              </div>

              {showDropDown && (
                <ul className="absolute flex flex-col right-0 -left-2/4 shadow-lg text-text rounded-lg py-4 mt-2 px-2">
                  <li className="pl-4 hover:bg-gray-400 hover:text-white transition-color duration-200 ease-in-out rounded-xl">
                    <Link to="profile" className="py-2">
                      Profile
                    </Link>
                  </li>
                  <li className="pl-4 hover:bg-gray-400 hover:text-white transition-color duration-200 ease-in-out rounded-xl">
                    <Link to="/admin/dashboard" className="py-2">
                      Admin
                    </Link>
                  </li>
                  <li className="pl-4 hover:bg-gray-400 hover:text-white transition-color duration-200 ease-in-out rounded-xl">
                    <button className="py-2" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
