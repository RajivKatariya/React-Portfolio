import React from 'react'
import './Header.css';
import img from "../image/img.jpg";
import Reactimg from '../image/react.4e0c97009b885bfa75c5.svg';
import Htmlimg from '../image/html.8664168d5bc90b1a2439.svg';
import Cssimg from '../image/css.39769a8bd378bf410d6b.svg';
import Nodeimg from '../image/nodejs.10c9e2aa0ca7edf36fce.svg';
import Jsimg from '../image/javascript.4c1b5332c1b1057928f6.svg';
import MongoDBimg from '../image/mongodb.6835c61a518a732eb831.svg';
import Expressimg from '../image/express.4925c0127df8857c18b3.svg';
import GitHubimg from '../image/git.png';

export default function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={img} alt="Profile.img"/>
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              My name is RAJIV KUMAR. I completed my Post Graduation in Master
              Of Computer Science and Engineering from Dr. Rammanohar Lohiya
              Awadh University. I am much interested in developing new things
              which excite me a lot. :)
              <br />
              <br />
              I love exploring new technologies and being a practitioner, I like
              to stay on top of latest trends. I try to leave every line of code
              I write more readable, accessible, and modular.
            </p>
            <div className="skill">
              <div className="skill-container">
                <img src={Reactimg} alt="ReactJs" />
                <img src={Htmlimg} alt="HTML" />
                <img src={Cssimg} alt="CSS" />
                <img src={Nodeimg} alt="Nodejs" />
                <img
                  src={Jsimg}
                  alt="Javascript"
                />
                <img src={MongoDBimg} alt="MongoDb" />
                <img src={Expressimg} alt="Express" />
                <img src={GitHubimg} alt="Express" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
