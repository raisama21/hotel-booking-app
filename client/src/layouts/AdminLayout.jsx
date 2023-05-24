import { Outlet } from "react-router-dom";
import SideNavigationBar from "../components/UI/SideNavigationBar";
import TopNavigationBar from "../components/UI/TopNavigationBar";

export default function AdminLayout() {
  return (
    <div className="">
      <SideNavigationBar />
      <TopNavigationBar />

      <Outlet />
    </div>
  );
}
