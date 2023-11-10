import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import RecipieChecklist from "./components/RecipieChecklist/RecipieChecklist";
import ShoppingList from "./components/ShoppingList/ShoppingList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/Inventory" Component={Inventory} />
      <Route path="/RecipieChecklist" Component={RecipieChecklist} />
      <Route path="/ShoppingList" Component={ShoppingList} />
      <Route path="*" Component={PageNotFound} />
    </Routes>
  );
};

export default AppRoutes;
