import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { Time } from "./Time";

export const Contact = () => {
  const form = useRef();
  const timer = 60000;
  const [avail, setAvail] = useState(
    localStorage.getItem("availablity") || "true"
  );
  const [remainingTime, setRemainingTime] = useState(
    localStorage.getItem("countdown") || timer
  );
  const [showTimer, setShowTimer] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (avail === "true") {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
          console.log("Email sent successfully:", result.text);
          setEmailSent(true);
          setFadeOut(false);

          // Start fade out after 4 seconds
          setTimeout(() => {
            setFadeOut(true);
          }, 4000);

          // Hide completely after fade out animation completes
          setTimeout(() => {
            setEmailSent(false);
            setFadeOut(false);
          }, 4300);
        })
        .catch((error) => {
          console.error("Email sending failed:", error.text);
          alert("Failed to send email. Please try again.");
        });

      e.target.reset();
      localStorage.setItem("availablity", "false");
      localStorage.setItem("countdown", timer);
      setRemainingTime(timer);
      setAvail("false");
      setShowTimer(false);

      const countdownInterval = setInterval(() => {
        setRemainingTime((prevTime) => {
          const newTime = prevTime - 1000;
          localStorage.setItem("countdown", newTime);
          if (newTime <= 0) {
            clearInterval(countdownInterval);
            localStorage.setItem("availablity", "true");
            setAvail("true");
            setShowTimer(false);
            return timer;
          }
          return newTime;
        });
      }, 1000);

      // Clean up after timer expires
      setTimeout(() => {
        clearInterval(countdownInterval);
        localStorage.setItem("availablity", "true");
        setAvail("true");
        setShowTimer(false);
      }, timer);
    } else {
      // User tried to send again during cooldown - now show the timer
      setShowTimer(true);
    }
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

              <div
                className={
                  avail === "true"
                    ? "contact__form-box contact__form-area"
                    : "contact__form-box contact__form-area contact__form-area-time"
                }
              >
                <label className="contact__form-label">Idea</label>
                <textarea
                  name="project"
                  className="contact__form-input"
                  placeholder="Write me your idea"
                />
              </div>
              {showTimer && avail === "false" && (
                <Time remainingTime={remainingTime} />
              )}
              {emailSent && (
                <div
                  className={`contact__success-message ${
                    fadeOut ? "fade-out" : ""
                  }`}
                >
                  <i className="bx bx-check-circle"></i>
                  Email sent successfully! Thank you for reaching out.
                </div>
              )}
              <button
                type="submit"
                disabled={showTimer}
                className={
                  avail === "true"
                    ? "button button--flex contact__send"
                    : "button button--flex"
                }
              >
                Send
                <i className="bx bxs-send bx-sm button__icon"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
