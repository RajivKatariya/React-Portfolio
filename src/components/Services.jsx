import React from 'react'
import { Link } from 'react-scroll';
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
            <Link to="">Learn More</Link>
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet quam facilis adipisci dolorum quibusdam aliquam nam
                fuga, atque deleniti obcaecati repudiandae dignissimos dolorem,
                enim autem vero odit, nobis beatae et!
              </p>
              <a href=""><i className="fas fa-external-link-alt"></i></a>
            </div>
          </div>
          <div className="work">
            <img src={works2} />
            <div className="layer">
              <h3>Web Development</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet quam facilis adipisci dolorum quibusdam aliquam nam
                fuga, atque deleniti obcaecati repudiandae dignissimos dolorem,
                enim autem vero odit, nobis beatae et!
              </p>
              <a href=""><i className="fas fa-external-link-alt"></i></a>
            </div>
          </div>
          <div className="work">
            <img src={works3} />
            <div className="layer">
              <h3>Web Development</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet quam facilis adipisci dolorum quibusdam aliquam nam
                fuga, atque deleniti obcaecati repudiandae dignissimos dolorem,
                enim autem vero odit, nobis beatae et!
              </p>
              <a href=""><i className="fas fa-external-link-alt"></i></a>
            </div>
          </div>
        </div>
        <a href="" className="btn">See More</a>
      </div>
    </div>
    </>
  )
}
