import HomeCard from "../card/HomeCard";
import HomeBanner from "../banners/HomeBanner";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.querySelector(".main").style.backgroundColor = `var(--background-color)`;
  }, []);

  return (
    <section className="homePage">
      <HomeBanner />
      <HomeCard />
    </section>
  );
};

export default Home;
