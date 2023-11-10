import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

interface INavbar {
  onHamburgerClick: () => void;
}

const Navbar = (props: INavbar) => {
  const { onHamburgerClick } = props;
  return (
    <nav className="navigation">
      <div className="brand-name">My Kitchen</div>
      <div className="hamburger" onClick={() => onHamburgerClick()}>
        <div className="hamburger-lines"></div>
        <div className="hamburger-lines"></div>
        <div className="hamburger-lines"></div>
      </div>
      <div className="navigation-menu">
        <ul>
          <li>
            <NavLink to="/Inventory">Inventory</NavLink>
          </li>
          <li>
            <NavLink to="/RecipieChecklist">Recipie Checklist</NavLink>
          </li>
          <li>
            <NavLink to="/ShoppingList">Shopping List</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
