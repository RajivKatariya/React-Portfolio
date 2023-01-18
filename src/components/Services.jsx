import React from 'react'
import { Link } from 'react-scroll';
import './Header.css';

export default function Services() {
  return (
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
            <Link to="">Learn More</Link>
          </div>
          <div>
            <i className="fas fa-crop-alt"></i>
            <h2>Web Developer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              sed distinctio molestias sapiente quaerat, eveniet, aspernatur
              eaque rem, ducimus laboriosam optio nam? Neque vero natus ex
              quibusdam fuga sapiente facilis.
            </p>
            <Link to="">Learn More</Link>
          </div>
          <div>
            <i className="fab fa-app-store"></i>
            <h2>Web Developer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              sed distinctio molestias sapiente quaerat, eveniet, aspernatur
              eaque rem, ducimus laboriosam optio nam? Neque vero natus ex
              quibusdam fuga sapiente facilis.
            </p>
            <Link to="">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
