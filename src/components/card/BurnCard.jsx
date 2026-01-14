import React from "react";
import { motion } from "motion/react";
const BurnCard = ({ item }) => {
  return (
    <motion.div
      variants={{
        hidden: { y: 100, opacity: 0 },
        show: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      }}
      className={`burnCard ${item.className}`}
    >
      <h2>{item.title}</h2>
      <div className="cardDescription">
        {item.description.split("<br>").map((line, index) => (
          <React.Fragment key={index}>
            <p>{`:) ${line}`}</p>
            <br />
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

export default BurnCard;
