import React from 'react'
import "./footer.css"

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <div className="footer__title">KYC</div>
            <div className="footer__section">
            <a href="#about">About</a>
            <a href="#qualification">Qualification</a>
            <a href="#contact">Project</a>
            </div>
            <span className="footer__copyright">&#169; KayWhy. All rights reserved</span>
        </div>
    </footer>

  )
}
