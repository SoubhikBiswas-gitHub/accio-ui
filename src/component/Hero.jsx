import React from "react";
import srcImage from "./utility/herobg.png";

function Hero() {
  return (
    <div className="container">
      <div className="img">
        <img src={srcImage} alt="img" />
      </div>
      <div className="hero">
        <div className="txt">
          <h5>SUMMER 2020</h5>
          <h1>NEW COLLECTION</h1>
          <h4>
            We know how large objects will act, <br /> but things on a small
            scale.
          </h4>
          <button>SHOP NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
