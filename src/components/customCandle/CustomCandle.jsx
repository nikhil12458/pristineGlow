import React, { useContext, useState } from "react";
import { CandleContext } from "../../context/CandleProvider";
import { Helmet } from "react-helmet-async";

const CustomCandle = () => {
  const fields = ["type", "size", "fragrance", "packaging"];

  const { customData } = useContext(CandleContext);

  const [formData, setFormData] = useState({
    size: "",
    type: "",
    fragrance: "",
    packaging: "",
  });

  const [number, setNumber] = useState("");

  const handleSelect = (category, value) => {
    setFormData((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const handleBeforeSubmit = (e) => {
    if (
      !Object.values(formData).every(Boolean) ||
      number === "" ||
      number.length > 10 ||
      number.length < 10
    ) {
      e.preventDefault();
      alert("Please select all options");
    }
  };

  return (
    <>
      <Helmet>
        <title>Custom Candle | Pristine Glow</title>
        <meta
          name="description"
          content="Design your perfect custom candle at Pristine Glow — choose size, wax type, fragrance, and packaging. Hand-poured, long-lasting candles crafted for gifts, events, and home ambience."
        />
      </Helmet>

      <section className="customCandle">
        <h1 className="customHeading">Design your Custom Candle</h1>

        <div className="options">
          {fields.map((field) => (
            <div key={field} className="field">
              <h3>{field}</h3>

              <div className="customGrid">
                {customData
                  .filter((item) => item.category === field)
                  .map((item) => (
                    <div
                      key={item.id}
                      className={`customCard ${
                        formData[field] === item.name ? "active" : ""
                      }`}
                      onClick={() => handleSelect(field, item.name)}
                    >
                      <p>{item.name}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="details">
          <h3>Contact-Detail</h3>
          <input
            type="tel"
            value={number}
            placeholder="+91-0000000000"
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>

        <form
          id="customForm"
          action="https://api.web3forms.com/submit"
          method="POST"
          onSubmit={handleBeforeSubmit}
        >
          <input
            type="hidden"
            name="access_key"
            value="4c70dbb3-1966-4e5e-8ae1-4af6a5f40051"
          ></input>
          <input
            type="hidden"
            name="redirect"
            value={`${window.location.origin}/custom-order`}
          />
          <input type="hidden" name="size" value={formData.size} />
          <input type="hidden" name="type" value={formData.type} />
          <input type="hidden" name="fragrance" value={formData.fragrance} />
          <input type="hidden" name="packing" value={formData.packaging} />
          <input type="hidden" name="phone-number" value={number} />
        </form>

        <button className="customBtn" type="submit" form="customForm">
          Order
        </button>
      </section>
    </>
  );
};

export default CustomCandle;
