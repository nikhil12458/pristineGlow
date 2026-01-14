import React, { useContext, useEffect, useState } from "react";
import { CandleContext } from "../../context/CandleProvider";
import Button from "../button/Button";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  const { candleData } = useContext(CandleContext);

  const [customData, setCustomData] = useState({
    title: "",
    price: "",
    fragrance: "",
    link: "",
    description: "",
  });

  const {
    name,
    backgroundColor,
    description,
    price,
    mainImg,
    fragrance,
    prop,
  } = candleData[id - 1];

  const [num, setNum] = useState(1);

  useEffect(() => {
    document.querySelector(
      ".main"
    ).style.backgroundColor = `${backgroundColor}`;

    setCustomData({
      title: name,
      price: price,
      fragrance: "fragrance",
      link: window.location.href,
      description: description,
    });
  }, []);

  const sendToWhatsapp = () => {
    const whatsappNumber = "9350355627";

    const text = `
    Candle order 🕯️

    title: ${customData.title}
    price: ${customData.price}
    quantity: ${num}
    fragrance: ${customData.fragrance}
    link: ${customData.link}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="productPage">
      <div className="left">
        <div className="crop">
          <img src={mainImg} alt="" />
        </div>
        <div className="propImage">
          <img src={prop} alt="" />
        </div>
      </div>
      <div className="right">
        <h3>{name}</h3>
        <p>Rs. {price.toFixed(2)}</p>
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
        <div className="fragrance">
          <h2>Fragrance</h2>
          <p>{fragrance}</p>
        </div>
        <Button
          fnc={sendToWhatsapp}
          type={"button"}
          text={"BUY NOW"}
          img={"/logo/WhatsApp.png"}
        />
        <div className="line"></div>
        <div className="details">
          <h2>Details</h2>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
