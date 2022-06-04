import React from "react";
import { Search } from "../SearchBar/Search";
import { useLocation } from "react-router-dom";

export function Home() {
  var location = useLocation();
  return (
    <div>
      <Search />

      <h1>Home{location.pathname}</h1>
    </div>
  );
}
