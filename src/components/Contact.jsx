import React from 'react'
import'./Header.css';


export default function Contact() {
  return (
<>
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <i className="fas fa-paper-plane"></i
            ><a href="mailto:rajivkatariya098@gmail.com"
              >Rajivkatariya098@gmail.com</a
            ><br />
            <i className="fas fa-phone-square-alt"></i
            ><a  href="tel:+91 7895197221">+91 7895197221</a>
            <div className="social-icons">
              <a  href="https://github.com/RajivKatariya"
                ><i className="fab fa-github-alt"></i
              ></a>
              <a href="https://www.instagram.com/rajiv_1katariya/"
                ><i className="fab fa-instagram"></i
              ></a>
              <a  href="https://www.linkedin.com/in/rajiv-kumar-58221a212/"
                ><i className="fab fa-linkedin"></i
              ></a>
            </div>
            <a href='Resume.pdf' download className="btn btn2">Download CV</a>
          </div>
          <div className="contact-right">
            <form name="submit-to-google-sheet">
              <input
                type="text"
                name="Name"
                placeholder="Enter Your Name"
                required
              />
              <input
                type="email"
                name="Email"
                placeholder="Enter Email-id"
                required
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
            <span id="msg"></span>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © Rajiv Kumar. Made with by Rajiv Kumar</p>
      </div>
    </div>
    </>
    
    )
}
