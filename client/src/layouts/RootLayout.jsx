import { Outlet } from "react-router-dom";
import NavigationBar from "../components/UI/NavigationBar";

export default function RootLayout() {
  return (
    <>
      <NavigationBar />

      <Outlet />
    </>
  );
}
