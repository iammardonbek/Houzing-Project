import React from "react";
import Recommended from "../Recommended/Recommended";
import { Search } from "../SearchBar/Search";
import { Slider } from "../Slider/Slider";

export function Home() {
  return (
    <div>
      <Search />
      <Slider />
      <Recommended />
    </div>
  );
}
