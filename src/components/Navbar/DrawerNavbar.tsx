import React from "react";
import { NavLink } from "react-router-dom";
import "./DrawerNavbar.css";

interface IProps {
  showDrawer: boolean;
  onHamburgerClick: () => void;
}

const DrawerNavbar = (props: IProps) => {
  const { showDrawer, onHamburgerClick } = props;

  return (
    <nav
      className={
        showDrawer ? "drawer-navigation" : "drawer-navigation hide-drawer"
      }
    >
      <div className="drawer-brand-name">My Kitchen</div>
      <div className="drawer-navigation-menu">
        <ul>
          <li>
            <NavLink to="/Inventory" onClick={() => onHamburgerClick()}>
              Inventory
            </NavLink>
          </li>
          <li>
            <NavLink to="/RecipieChecklist" onClick={() => onHamburgerClick()}>
              Recipie Checklist
            </NavLink>
          </li>
          <li>
            <NavLink to="/ShoppingList" onClick={() => onHamburgerClick()}>
              Shopping List
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DrawerNavbar;
