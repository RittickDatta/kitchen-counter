import React from "react";
import { NavLink } from "react-router-dom";
import "./DrawerNavbar.css";

interface IProps {
  showDrawer: boolean;
}

const DrawerNavbar = (props: IProps) => {
  const { showDrawer } = props;

  return (
    <nav
      className={
        showDrawer ? "drawer-navigation" : "drawer-navigation hide-drawer"
      }
    >
      <div className="drawer-brand-name">Kitchen</div>
      <div className="drawer-navigation-menu">
        <ul>
          <li>
            <NavLink to="/">Inventory</NavLink>
          </li>
          <li>
            <NavLink to="/">Recipie Checklist</NavLink>
          </li>
          <li>
            <NavLink to="/">Shopping List</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DrawerNavbar;
