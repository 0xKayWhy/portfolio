import React from "react";
import "./qualification.css";

export const Qualification = () => {
  return (
    <section className="qualification section">
      <div className="qualification__container container">
        <div className="qualification__header subheader">
          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle">My personel journey</span>
        </div>
        <div className="qualification__body">
          <div className="qualification__body__title">
            <div>
              <i className="bx bxs-graduation bx-sm qualification__icon"></i>
              Education
            </div>
            <div>
              <i className="bx bx-briefcase bx-sm qualification__icon"></i>
              Experience
            </div>
          </div>
          <div className="qualification__footer">
            <div className="qualification__content">
              <h3 className="qualification__content__title">General Assembly</h3>
              <div className="qualification__content__subtitle">
                Software Engineering Bootcamp
              </div>
              <div>
                <span className="qualification__content_date">
                  <i className="bx bx-calendar"></i>
                  2023 April - July
                </span>
              </div>
            </div>
            <div className="qualification__divider">
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
