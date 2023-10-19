import React,{useState} from 'react'
import './navbar.css'

export const Navbar = () => {

    //set selected nav section
      const [selected, setSelected] = useState("")
      const [showMenu, setShowMenu] = useState(false)

      //change background header
      window.addEventListener("scroll",function() {
        const header = document.querySelector(".header");

        // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header class
        if (window.scrollY >= 80) header.classList.add ("scroll-header")
        else header.classList.remove("scroll-header")
    })
  return (
    <header className="header">
        <nav className="nav container">
            <a href="/">KYC</a>
            <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
            <ul className='nav__list'>
                <li><a href="#home" onClick={() => setSelected("home")} className={selected == "home" ? 'active__link' : "default__link"}><i className='bx bx-home bx-sm nav__icon'></i>Home</a></li>
                <li><a href="#about" onClick={() => setSelected("about")} className={selected == "about" ? 'active__link' : "default__link"}><i className='bx bx-user bx-sm nav__icon'></i>About</a></li>
                <li><a href="#skills" onClick={() => setSelected("skills")} className={selected == "skills" ? 'active__link' : 'default__link'}><i className='bx bx-file bx-sm nav__icon' ></i>Skills</a></li>
                <li><a href="#qualification" onClick={() => setSelected("qualification")} className={selected == "qualification" ? 'active__link' : 'default__link'}><i className='bx bx-book bx-sm nav__icon' ></i>Qualification</a></li>
                <li><a href="#portfolio" onClick={() => setSelected("portfolio")} className={selected == "portfolio" ? 'active__link' : 'default__link'}><i className='bx bx-folder-open bx-sm nav__icon' ></i>Portfolio</a></li>
                <li><a href="#contact" onClick={() => setSelected("contact")} className={selected == "contact" ? 'active__link' : 'default__link'}><i className='bx bx-phone-call bx-sm nav__icon' ></i>Contact</a></li>
            </ul>
            <div className="nav__close" onClick={() => setShowMenu(false)}>
            <svg width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
            </div>
            </div>
            <div className="nav__toggle"  onClick={() => setShowMenu(true)}>
            <i className='bx bx-category-alt bx-sm'></i>
            </div>
        </nav>
    </header>
  )
}
