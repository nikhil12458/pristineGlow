import React, { useContext } from "react";
import { CandleContext } from "../../context/CandleProvider";
import { Link } from "react-router-dom";

const HomeCard = () => {
  const { candleData } = useContext(CandleContext);

  return (
    <div className="homeCards">
      {candleData.map((item) => {
        return (
          <div key={item.id} className="homeCard">
            <div className="imgContainer">
              <img src={item.mainImg} alt="" />
            </div>
            <div className="productTitle">
              <Link to={`/${item.slug}/${item.id}`}>
                <h3 className="name">{item.name}</h3>
              </Link>
              <Link to={`/${item.slug}/${item.id}`}>
                <h4 className="price">₹{item.price}</h4>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeCard;
