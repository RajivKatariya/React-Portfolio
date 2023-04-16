import React from 'react'
import'./Header.css';
import Rajiv from '../image/Rajiv Kumar React  Dev.pdf';
     
export default function Contact() {
            const scriptURL =
            "https://script.google.com/macros/s/AKfycbytXpSFhA0_J1SWliCXThQvNdCDt62zhxxL3BrabbMonh2-1v5FI1sxCCyG7kWNZa2iiA/exec";
            const form = document.forms["submit-to-google-sheet"];
            const msg = document.getElementById("msg");

            form.addEventListener("submit", (e) => {
            e.preventDefault();
            fetch(scriptURL, { method: "POST", body: new FormData(form) })
            .then((response) => {
            msg.innerHTML = "Message Sent Successfully";
            setTimeout(function () {
            msg.innerHTML = "";
            }, 5000);
            form.reset();
            })
            .catch((error) => console.error("Error!", error.message));
            });
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
            <a href={Rajiv} download='Rajiv Kumar React Dev' className="btn btn2">Download CV</a>
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
