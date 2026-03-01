import React, { useContext } from "react";
import { CandleContext } from "../../context/CandleProvider";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const HomeCard = ({ cat }) => {
  const { candleData } = useContext(CandleContext);

  const filteredData = candleData.filter((elem) => !cat || elem.category === cat);

  return (
    <div className="homeCards">
      {filteredData.map((item, idx) => {
        return (
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            key={item.id}
            className="homeCard"
          >
            <div className="imgContainer">
              <img
                src={item.mainImg}
                alt={`${item.name} candle`}
                loading={idx < 6 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={idx < 2 ? "high" : "auto"}
              />
            </div>
            <div className="productTitle">
              <Link to={`/${item.slug}/${item.id}`}>
                <h3 className="name">{item.name}</h3>
              </Link>
              <Link to={`/${item.slug}/${item.id}`}>
                <h4 className="price">₹{item.price}</h4>
              </Link>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default HomeCard;
