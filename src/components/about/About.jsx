import React from "react";
import "./about.css";
import img from "../../assets/pfp.jpg";
import CV from "../../assets/CV-CHEONG_KONG_YAN.pdf";

export const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container">
        <div className="about__header subheader">
          <h2 className="section__title">About Me</h2>
          <span className="section__subtitle">My introduction</span>
        </div>
        <div className="about__body">
          <div className="about__img">
            <img src={img} alt="pfp" />
          </div>
          <div className="about__section">
            <div className="about__box__section">
              <div className="about__box">
                <i className="bx bx-briefcase bx-sm"></i>
                <div>Software Development</div>
                <span>1 Year </span>
              </div>
              <div className="about__box">
                <i className="bx bx-file bx-sm"></i>
                <div></div>
                <div>Finance & Auditing</div>
                <span>6 Years</span>
              </div>
              <div className="about__box">
                <i className="bx bx-code bx-sm"></i>
                <div></div>
                <div>Coding Bootcamp</div>
                <span>3 months ( General Assembly )</span>
              </div>
            </div>
            <div className="about__box__description">
              <p>
                Hi, I’m KY — a Software Developer based in Malaysia. I have 1
                year of professional experience in software development,
                working with{" "}
                <strong>
                  React.js, TypeScript, Ant Design, NestJS, and MongoDB
                </strong>
                .
              </p>
              <p>
                Before moving into software, I built a strong foundation in
                finance and auditing with 6+ years of industry experience, which
                sharpened my problem-solving and analytical skills.
              </p>
              <p>
              I’m passionate about building scalable applications, learning new
              technologies, and delivering solutions that create real impact.
              </p>
            </div>
            <a
              download=""
              href={CV}
              className="about__box__button button button-flex"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
