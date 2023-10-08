
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { About } from './components/about/About'
import { Home } from './components/home/Home'
import { Skills } from './components/skills/Skills'
import { Qualification } from './components/qualification/Qualification'
import { Portfolios } from './components/portfolios/Portfolios'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'

function App() {


  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Qualification/>
    <Portfolios/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
