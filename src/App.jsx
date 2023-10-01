
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { About } from './components/about/About'
import { Home } from './components/home/Home'
import { Skills } from './components/skills/Skills'
import { Qualification } from './components/qualification/Qualification'

function App() {


  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Qualification/>

    </>
  )
}

export default App
