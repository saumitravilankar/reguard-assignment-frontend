import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, NavLink } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <div className="w-[240px] min-h-screen border-r">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `w-full h-[60px] flex items-center justify-start pl-4 ${
            isActive ? "bg-primary text-white" : ""
          }`
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/customers"
        className={({ isActive }) =>
          `w-full h-[60px] flex items-center justify-start pl-4 ${
            isActive ? "bg-primary text-white" : ""
          }`
        }
      >
        Customers
      </NavLink>
    </div>
  );
};

export default SidebarMenu;
