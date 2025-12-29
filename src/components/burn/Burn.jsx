import { useContext } from "react";
import BurnCard from "../card/BurnCard";
import { CandleContext } from "../../context/CandleProvider";
import { Helmet } from "react-helmet-async";

const Burn = () => {
  const { burnData } = useContext(CandleContext);
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
      <div className="glowCards">
        {burnData.map((item, idx) => {
          return <BurnCard key={idx} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Burn;
