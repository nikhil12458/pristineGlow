import HomeCard from "../card/HomeCard";
import HomeBanner from "../banners/HomeBanner";
import { useEffect } from "react";
import CategorySelector from "../categories/CategorySelector";
import React, { useState } from "react";

const Home = () => {
  useEffect(() => {
    document.querySelector(".main").style.backgroundColor =
      `var(--background-color)`;
  }, []);

  const [cat, setCat] = useState("");

  return (
    <section className="homePage">
      <HomeBanner />
      <CategorySelector cat={cat} setCat={setCat} />
      <HomeCard cat={cat} />
    </section>
  );
};

export default Home;
