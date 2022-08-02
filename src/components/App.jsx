import React from "react";
import { Navbar } from "./Generic Stuff/Navbar/Navbar";
import { NavbarDetails } from "../utils/Details";
import { Route, Routes } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import Register from "./Register/Register";
import ScrollToTop from "./Generic Stuff/ScrollToTop/ScrollToTop";
import ChosenHouse from "./Generic Stuff/ChosenHouse/ChosenHouse";
import Favorite from "./Favorite/Favorite";

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
