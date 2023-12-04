import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
