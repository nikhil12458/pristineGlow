import React from "react";

const HomeBanner = () => {
  return (
    <section className="homeBanner">
      <img
        src="/banner/homeBanner.webp"
        alt="Decorative candle arrangement banner"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div className="bannerContent">
        <img src="/logo/mainLogo.svg" alt="Pristine Glow logo" loading="eager" />
        <h4>
          Pristine <br />
          <span>Glow</span>
        </h4>
      </div>
    </section>
  );
};

export default HomeBanner;
