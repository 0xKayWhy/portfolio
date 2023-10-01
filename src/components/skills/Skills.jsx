import React from "react";
import "./skills.css";
import { data } from "./data";

export const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="skills__container container">
        <div className="skills__header subheader">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My technical level</span>
        </div>
        <div className="skills__body">
          {data.map((dt) => {
            return (
              <div className="skills__box" key={dt.id}>
                <div className="skills__box__title" >{dt.title}</div>
                <div className="skills__box__subtitle grid">
                  {dt.skills.map((d, index) => {
                    return (
                      <div  key={index}>
                        <i className="bx bx-code-block skills__icon"></i>
                        {d}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
