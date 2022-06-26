import React from "react";
import { Navbar } from "./components/Generic Stuff/Navbar/Navbar";
import { NavbarDetails } from "./utils/Details";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          {NavbarDetails.map(({ id, path, element }) => (
            <Route key={id} path={path} element={element} />
          ))}
          <Route element={<SignIn />} path="Login" />
        </Route>
      </Routes>
    </div>
  );
}
