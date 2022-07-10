import React from "react";
import Recommended from "./Recommended/Recommended";
import { Search } from "../Generic Stuff/SearchBar/Search";
import { Slider } from "../Generic Stuff/Slider/Slider";
import WhyUs from "./WhyUs/WhyUs";
import Category from "./Category/Category";
import Farmhouse from "./Farmhouse/Farmhouse";
import RecentProperties from "./RecentProperties/RecentProperties";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "../Generic Stuff/Footer/Footer";

export function Home() {
  return (
    <div>
      <Search />
      <Slider />
      <Recommended />
      <WhyUs />
      {localStorage.getItem("token") && <Category />}
      <Farmhouse />
      <RecentProperties />
      <Testimonials />
      <Footer />
    </div>
  );
}
