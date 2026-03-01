import HomeCard from "../card/HomeCard";
import HomeBanner from "../banners/HomeBanner";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import CategorySelector from "../categories/CategorySelector";

const Home = () => {
  useEffect(() => {
    document.querySelector(".main").style.backgroundColor =
      `var(--background-color)`;
  }, []);

  const [cat, setCat] = useState("");

  return (
    <>
      <Helmet>
        <title>Pristine Glow | Handmade Premium Candles</title>
        <meta
          name="description"
          content="Shop handcrafted premium candles from Pristine Glow. Discover festive, floral, and custom candles for gifting, decor, and cozy ambience."
        />
        <link rel="canonical" href="https://pristine-glow.vercel.app/" />
      </Helmet>
      <section className="homePage">
        <HomeBanner />
        <CategorySelector cat={cat} setCat={setCat} />
        <HomeCard cat={cat} />
      </section>
    </>
  );
};

export default Home;
