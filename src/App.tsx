import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import DrawerNavbar from "./components/Navbar/DrawerNavbar";
import { BrowserRouter as Router, Outlet } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const handleDrawer = () => setShowDrawer(!showDrawer);
  return (
    <Router>
      <div className="App">
        <AppRoutes />
        <Navbar onHamburgerClick={handleDrawer} />
        <DrawerNavbar showDrawer={showDrawer} />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </Router>
  );
}
