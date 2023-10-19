import React, { useState } from "react";
import "./qualification.css";
import { Experience, Education } from "./Data";

export const Qualification = () => {
  const [data, setData] = useState(Education);

  return (
    <section className="qualification section" id="qualification">
      <div className="qualification__container container">
        <div className="qualification__header subheader">
          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle">My personel journey</span>
        </div>
        <div className="qualification__body">
          <div className="qualification__body__title">
            <button
              onClick={() => setData(Education)}
              className="button button--flex"
            >
              <i className="bx bxs-graduation bx-sm qualification__icon"></i>
              Education
            </button>
            <button
              onClick={() => setData(Experience)}
              className="button button--flex"
            >
              <i className="bx bx-briefcase bx-sm qualification__icon"></i>
              Experience
            </button>
          </div>
          <div className="qualification__footer">
          {data.map((dt, index) => {
            return (
              <div className="qualification__footer__section" key={index}>
                <div
                  className={
                    index % 2 == 0
                      ? "qualification__content"
                      : "qualification__content__right"
                  }
                >
                  <h3 className="qualification__content__title">{dt.title}</h3>
                  <div className="qualification__content__subtitle">
                    {dt.subtitle}
                  </div>
                  <div>
                    <span className="qualification__content_date">
                      <i className="bx bx-calendar calendar__icon"></i>
                      {dt.date}
                    </span>
                  </div>
                </div>
                <div className="qualification__divider">
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
};
