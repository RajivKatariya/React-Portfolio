import React from 'react'
import './Header.css';
import works1 from '../image/1.jpg';
import works2 from '../image/2.jpg';
import works3 from '../image/3.jpg';

export default function Services() {
  return (
    <>
    <div id="services">
      <div className="conatainer">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <div>
            <i className="fas fa-code"></i>
            <h2>Web Developer</h2>
            <p>
              I am a full stack web developer(MERN) and build websites using
              HTML, CSS, Javascript, ReactJs. I have also good grasp on Node and
              NoSQL(MongoDb)
            </p>
            <a href="">Learn More</a>
          </div>
        </div>
      </div>
    </div>

    {/* -- -----------------------------------portfolio--------------------------------- -- */}

    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img src= {works1}/>
            <div className="layer">
              <h3>Web Development</h3>
              <p>
                I have done This Website.This website maintain the automation parts for the automation companies.
                I used HTML5,CSS,JAVASCRIPT,BOOTSTRAP.
              </p>
              <a href="https://katariyaautomation.co.in/"><i className="fas fa-external-link-alt"></i></a>
            </div>
          </div>
          <div className="work">
            <img src={works2} />
            <div className="layer">
              <h3>Website Hosting</h3>
              <p>
              I have done This Website.This website maintain the automation
                parts for the automation companies. I Hosted this website from to
                Hostinger.
              </p>
              <a href="https://katariyaautomation.co.in/"><i className="fas fa-external-link-alt"></i></a>
            </div>
          </div>
          <div className="work">
            <img src={works3} />
            <div className="layer">
              <h3>Website Mangement</h3>
              <p>
              I have done This Website.This website maintain the automation
                parts for the automation companies. I used
                HTML5,CSS,JAVASCRIPT,BOOTSTRAP.
              </p>
              <a href="https://katariyaautomation.co.in/"><i className="fas fa-external-link-alt"></i></a>
            </div>
          </div>
        </div>
        <a href="" className="btn">See More</a>
      </div>
    </div>
    </>
  )
}
