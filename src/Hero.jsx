import React from "react";
import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            saepe vero nisi praesentium maiores et commodi officiis, ut quasi
            enim expedita suscipit modi minus quas quibusdam facilis cupiditate!
            Itaque, vero!
          </p>
        </div>

        <div className="image-container">
          <img src={heroImg} alt="A woman and a browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
