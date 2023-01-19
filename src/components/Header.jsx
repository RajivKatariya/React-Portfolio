import React from 'react'
import './Header.css'
import {Link} from 'react-scroll';

const Header=()=> {
  const openmenu = ()=>
  {
    const a= document.getElementById('sidemenu');
    a.style.right='0';
  }
  const closemenu =()=>{
    const a= document.getElementById("sidemenu");
    a.style.right = "-200px";
  }
      
  return (
    <>
      <div id="header">
      <div className="container">
        <nav>
          <img src="logo.png" className="logo" alt="Logo.png"/>
          <ul id="sidemenu">
            <li><Link to="header" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About Us</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact Us</Link></li>
            <li><Link to="services" spy={true} smooth={true} offset={-100} duration={500}>Works</Link></li>
            <i className="fas fa-times" onClick={closemenu}></i>
          </ul>
          <i className="fas fa-bars" onClick={openmenu}></i>
        </nav>
        <div className="header-text">
        <p><b className="change-content"></b></p>
          <h1>Hi, I'm <span>Rajiv</span>Kumar</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
