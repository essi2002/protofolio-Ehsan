import ME from './Ehsan.jpeg'
import './intro.css'
import React from 'react';

const Intro = () => {
    return (
      <section>
       
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="me" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                
                <h5>sharif university of Technology</h5>
                <small>2 year <br></br>  Grade : 18.72</small>
              </article>
              <article className="about__card">
                
                <h5>survey</h5>
                <small>SAM optimization and anomaly detection with robustness on video surveillance</small>
              </article>
            </div>
            <p>I have spent last 8 months to gain skills about ML and DL.afteall i enrolled in mohammad hossein rohban lab. </p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
      </section>
    )
  }
  
  export default Intro