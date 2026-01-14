import { useContext, useEffect } from "react";
import BurnCard from "../card/BurnCard";
import { CandleContext } from "../../context/CandleProvider";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";

const Burn = () => {
  const { burnData } = useContext(CandleContext);
  useEffect(() => {
    document.querySelector(
      ".main"
    ).style.backgroundColor = `var(--background-color)`;
  }, []);
  return (
    <div className="burnBody">
      <Helmet>
        <title>Glow | Pristine Glow</title>
        <meta
          name="description"
          content="Discover essential candle care tips to enhance your candle experience. Learn how to burn candles safely and effectively with our expert advice."
        />
      </Helmet>
      <h1 className="glowHeading">✨ Glow – Candle Care Tips</h1>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="glowCards"
      >
        {burnData.map((item, idx) => {
          return <BurnCard key={idx} item={item} />;
        })}
      </motion.div>
    </div>
  );
};

export default Burn;
