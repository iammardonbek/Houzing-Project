import React from "react";
import Recommended from "./Recommended/Recommended";
import { Search } from "../Generic Stuff/SearchBar/Search";
import { Slider } from "../Generic Stuff/Slider/Slider";
import WhyUs from "./WhyUs/WhyUs";
import Category from "./Category/Category";
import Farmhouse from "./Farmhouse/Farmhouse";
import RecentProperties from "./RecentProperties/RecentProperties";
import Testimonials from "./Testimonials/Testimonials";

export function Home() {
  return (
    <div>
      <Search />
      <Slider />
      <Recommended />
      <WhyUs />
      <Category />
      <Farmhouse />
      <RecentProperties />
      <Testimonials />
    </div>
  );
}
