import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
// import styles from "./SideBar.module.css";

function SideBar() {
  return (
    <div>
      <Logo />
      <AppNav />
      <Outlet />
      <footer>
        <p>&copy; Copyright {new Date().getFullYear()} by WorldWise Inc</p>
      </footer>
    </div>
  );
}

export default SideBar;
