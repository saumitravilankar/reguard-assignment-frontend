import { Outlet } from "react-router";
import SidebarMenu from "../components/Sidebar";
import Navbar from "../components/Navbar";

export const Mainlayout = () => {
  return (
    <>
      <div className="flex w-full items-start">
        <SidebarMenu />
        <div className="flex-1">
          <Navbar />
          <div className="h-[calc(100vh-60px)]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
