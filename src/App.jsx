import React from "react";
import { Navbar } from "./components/Generic Stuff/Navbar/Navbar";
import { NavbarDetails } from "./utils/Details";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import ScrollToTop from "./components/Generic Stuff/ScrollToTop/ScrollToTop";
import ChosenHouse from "./components/Generic Stuff/ChosenHouse/ChosenHouse";
import Favorite from "./components/Favorite/Favorite";

export default function App() {
  return (
    <div className="app_container">
      <ScrollToTop />
      <Routes>
        <Route element={<Navbar />}>
          {NavbarDetails.map(({ id, path, element }) => (
            <Route key={id} path={path} element={element} />
          ))}
          <Route element={<SignIn />} path="Login" />
          <Route element={<Favorite />} path="Favorite" />
          <Route element={<Register />} path="Register" />
          <Route element={<ChosenHouse />} path="properties/:id" />
        </Route>
      </Routes>
    </div>
  );
}
