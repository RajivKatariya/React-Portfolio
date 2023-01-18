import React from 'react'
import'./Header.css';
import { Link } from 'react-scroll'

export default function Contact() {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <i className="fas fa-paper-plane"></i
            ><Link to="mailto:rajivkatariya098@gmail.com"
              >Rajivkatariya098@gmail.com</Link
            ><br />
            <i className="fas fa-phone-square-alt"></i
            ><Link to="tel:+91 7895197221">+91 7895197221</Link>
            <div className="social-icons">
              <Link to=""><i className="fab fa-facebook"></i></Link>
              <Link to=""><i className="fab fa-skype"></i></Link>
              <Link to=""><i className="fab fa-whatsapp"></i></Link>
              <Link to=""><i className="fab fa-linkedin"></i></Link>
            </div>
            <Link to="Resume.pdf" download className="btn btn2">Download CV</Link>
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
    )
}
