import React from "react";
import "./home.css";

export const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="home__intro">
          <h1 className="home__title">KY Cheong</h1>
          <h2 className="home__subtitle">Fullstack developer</h2>
          <span className="home__description">
            I'm fullstack software engineering based in Malaysia, and I'm very
            passionate and dedicated to my work
          </span>
        </div>
        <div className="home__img"></div>
      </div>
    </section>
  );
};
