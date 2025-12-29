import React from "react";

const BurnCard = ({ item }) => {
  return (
    <div className={`burnCard ${item.className}`}>
      <h2>{item.title}</h2>
      <div className="cardDescription">
        {item.description.split("<br>").map((line, index) => (
          <React.Fragment key={index}>
            <p>{`:) ${line}`}</p>
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BurnCard;
