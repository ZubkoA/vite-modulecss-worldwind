import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

export const PageNav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/product">Prodact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
