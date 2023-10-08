import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_9mjnj9l",
      "template_of3e71i",
      form.current,
      "TvN1pYn9kCzG56Ir-"
    );
    e.target.reset();
  };

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
          <div className="contact__form">
            <div className="contact__box-title">Write me your idea</div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="contact__form-box">
                <label className="contact__form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder="Insert your name"
                />
              </div>

              <div className="contact__form-box">
                <label className="contact__form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="Insert your email"
                />
              </div>

              <div className="contact__form-box contact__form-area">
                <label className="contact__form-label">Idea</label>
                <textarea
                  name="idea"
                  className="contact__form-input"
                  placeholder="Write me your idea"
                />
              </div>
              <button className="button button--flex">Send
              <i className='bx bxs-send bx-sm button__icon'></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
