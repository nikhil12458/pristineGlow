import React, { useContext, useEffect, useState } from "react";
import { CandleContext } from "../../context/CandleProvider";
import Button from "../button/Button";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  const { candleData } = useContext(CandleContext);
  const {name, backgroundColor, description, price, mainImg} = candleData[id - 1];
  console.log(backgroundColor)

  const [num, setNum] = useState(1);

  useEffect(() => {
    document.querySelector(".main").style.backgroundColor = `${backgroundColor}`;
  }, []);

  return (
    <section className="productPage">
      <div className="left">
        <div className="crop">
          <img src={mainImg} alt="" />
        </div>
      </div>
      <div className="right">
        <h3>{name}</h3>
        <p>Rs. {(price).toFixed(2)}</p>
        <div className="quantity">
          <h3>Quantity</h3>
          <div className="selector">
            <div
              onClick={() => {
                setNum((prev) => (num > 0 ? prev - 1 : num));
              }}
              className="decrement"
            >
              <p>-</p>
            </div>
            <p>{String(num).padStart(2, "0")}</p>
            <div
              onClick={() => {
                setNum((prev) => prev + 1);
              }}
              className="increment"
            >
              <p>+</p>
            </div>
          </div>
        </div>
        <Button text={"BUY NOW"} />
        <div className="line"></div>
        <div className="details">
          <h2>Details</h2>
          <p>
           {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
