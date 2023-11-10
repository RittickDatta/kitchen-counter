import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import DrawerNavbar from "./components/Navbar/DrawerNavbar";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const handleDrawer = () => setShowDrawer(!showDrawer);
  return (
    <Router>
      <div className="App">
        <Navbar onHamburgerClick={handleDrawer} />
        <DrawerNavbar showDrawer={showDrawer} />
      </div>
    </Router>
  );
}
