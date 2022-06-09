import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { NavbarDetails } from "./utils/Details";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          {NavbarDetails.map(({ id, path, element }) => (
            <Route key={id} path={path} element={element} />
          ))}
          <Route path="Login" />
        </Route>
      </Routes>
    </div>
  );
}