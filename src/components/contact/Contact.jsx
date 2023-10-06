import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact__container container">
        <div className="contact__header subheader">
          <h2 className="section__title">Contact</h2>
          <span className="section__subtitle">My contact</span>
        </div>
        <div className="contact__body">
          <div className="contact__box">
            <div className="contact__box-title">Let's connect</div>
            <a href="mailto:cky_2233@hotmail.com" className="contact__button">
              <div className="contact__email">
                <i className="bx bx-mail-send bx-md mail"></i>
                <div className="contact__box-subtitle">Email</div>
                <div className="contact__box-span">cky_2233@hotmail.com</div>
              </div>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+60163079918&text=Hello, let's connect!"
              className="contact__button"
              target="_blank"
            >
              <div className="contact__whatsapp">
              <i className="bx bxl-whatsapp bx-md whatsapp"></i>
                <div className="contact__box-subtitle">Whatsapp</div>
                <div className="contact__box-span">+6016-307 9918</div>
              </div>
            </a>
          </div>
          <div className="contact__textarea">Write me your idea</div>
        </div>
      </div>
    </section>
  );
};
