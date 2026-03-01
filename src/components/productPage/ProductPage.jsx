import React, { useContext, useEffect, useMemo, useState } from "react";
import { CandleContext } from "../../context/CandleProvider";
import Button from "../button/Button";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ProductPage = () => {
  const { id } = useParams();
  const { candleData } = useContext(CandleContext);

  const product = candleData.find((item) => String(item.id) === id) || candleData[0];

  const { name, backgroundColor, description, price, mainImg, fragrance, prop, slug } = product;

  const [customData, setCustomData] = useState({
    title: "",
    price: "",
    fragrance: "",
    link: "",
    description: "",
  });

  const [num, setNum] = useState(1);

  const productUrl = useMemo(
    () => `https://pristine-glow.vercel.app/${slug}/${product.id}`,
    [product.id, slug]
  );

  useEffect(() => {
    document.querySelector(".main").style.backgroundColor = `${backgroundColor}`;

    setCustomData({
      title: name,
      price,
      fragrance,
      link: window.location.href,
      description,
    });
  }, [backgroundColor, description, fragrance, name, price]);

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

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>{`${name} | Pristine Glow`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${name} | Pristine Glow`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={`https://pristine-glow.vercel.app${mainImg}`} />
        <meta property="og:url" content={productUrl} />
        <link rel="canonical" href={productUrl} />
      </Helmet>
      <section className="productPage">
        <div className="left">
          <div className="crop">
            <img src={mainImg} alt={`${name} main product image`} loading="eager" decoding="async" />
          </div>
          <div className="propImage">
            <img src={prop} alt={`${name} decorative prop`} loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="right">
          <h1>{name}</h1>
          <p>Rs. {price.toFixed(2)}</p>
          <div className="quantity">
            <h2>Quantity</h2>
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
          <Button fnc={sendToWhatsapp} type="button" text="BUY NOW" img="/logo/WhatsApp.png" />
          <div className="line"></div>
          <div className="details">
            <h2>Details</h2>
            <p>{description}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
