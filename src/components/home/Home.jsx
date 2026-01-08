import React from "react";
import HomeCard from "../card/HomeCard";
import HomeBanner from "../banners/HomeBanner";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <section className="homePage">
      <HomeBanner />
      <HomeCard />
      <Outlet />
    </section>
  );
};

export default Home;
