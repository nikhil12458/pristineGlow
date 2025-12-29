import { useContext } from "react";
import BurnCard from "../card/BurnCard";
import { CandleContext } from "../../context/CandleProvider";

const Burn = () => {
  const { burnData } = useContext(CandleContext);
  console.log(burnData)
  return (
    <div className="burnBody">
      <h1 className="glowHeading">✨ Glow – Candle Care Tips</h1>
      <div className="glowCards">
        {
        burnData.map((item, idx) => {
          return <BurnCard key={idx} item={item} />
        })
      }
      </div>
    </div>
  );
};

export default Burn;
