import React from "react";
import "./about.css";
import img from "../../assets/pfp.jpg";
import CV from "../../assets/CV.pdf"

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
                <div>Experience</div>
                <span>6 Years Accounting</span>
              </div>
              <div className="about__box">
              <i className='bx bx-file bx-sm'></i>
                <div></div>
                <div>Completed</div>
                <span>3 Projects</span>
              </div>
              <div className="about__box">
              <i className='bx bx-code bx-sm' ></i>
                <div></div>
                <div>Coding</div>
                <span>3 months bootcamp</span>
              </div>
            </div>
            <div className="about__box__description">
            Greetings! I'm KY, a full-stack developer with a background in finance. 
            I recently graduated from General Assembly's intensive bootcamp 
            and am now eager to make my mark in the software development world. 
            Let's connect and explore opportunities together!
            </div>
            <a download="" href={CV} className="about__box__button button button-flex">
              Download CV
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};
