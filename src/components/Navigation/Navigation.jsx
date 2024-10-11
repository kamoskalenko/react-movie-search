import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/" className={buildLinkClass}>
        HomePage
      </NavLink>
      <NavLink to="/movies" className={buildLinkClass}>
        MoviesPage
      </NavLink>
    </nav>
  );
};

export default Navigation;
