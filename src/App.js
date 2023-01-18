import React from 'react'
import Header from './components/Header'
import "./App.css"
import About from './components/About'
import Services from './components/Services';
import Contact from './components/Contact';
const App = () => {
  return (
    <>
    <Header/>
    <About/>
    <Services/>  
    <Contact/>
    </>
  )
}

export default App
