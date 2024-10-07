import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authContext/AuthContext";
import logo from "../assets/logo.png";
const Navber = () => {
  const { user } = useContext(AuthContext);
  const navlink = (
    <>
      <NavLink to={"/"}>
        <li>Home</li>
      </NavLink>
      <NavLink to={"/add-product"}>
        <li>Add Product</li>
      </NavLink>
      <NavLink to={"/my-cart"}>
        <li>My Cart</li>
      </NavLink>
      <NavLink to={"my-added"}>
        <li>My Added Product</li>
      </NavLink>
    </>
  );
  return (
    <div className=" bg-base-100 h-20 ">
      <div className="navbar items-center pt-0 container mx-auto">
        <div className="navbar-start">
          <Link>
            <img className="h-[80px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-8 font-medium text-[17px]">
            {navlink}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {/* profile Icons  */}
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="" src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="bg-[#ff487c] text-white px-7 py-1 font-semibold rounded-md">
                Login
              </button>
            </Link>
          )}
          {/* Menu Icons */}

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="absolute right-0 menu menu-md dropdown-content bg-base-100 rounded-box z-[5] mt-3 w-52 p-2 pl-5 shadow gap-3 font-medium text-[17px]"
            >
              {navlink}
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar mx-auto mt-5"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <h1 className="text-center">
                <p> Md Rezaul Islam</p>
                <button className="bg-[#ff487c] text-white w-full py-1 my-4 rounded-sm">
                  LogOut
                </button>
              </h1>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
