import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
  return (
    <section >
      <h5>The Skills I Have</h5>
      <h2> AI Skills </h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>AI</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Machine Learning</h4>
          </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Deep Learning</h4>
            </article>
            
          </div>
        </div>
        <div className="experience__backend">
          <h3>Framework and libraries</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>pytorch</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>tensorflow</h4>
            </article>
           
          </div>
        </div>
      </div>

     <br></br>
      <div style={{ width: '30%', margin: '0 auto' }} className="container experience__container">
        <div className="experience__frontend">
          <h3>Research Area</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Anomaly detection</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Optimization</h4>
            </article>
            
          </div>
        </div>
        
      </div>
      <br></br>

      <h2> Web Skills </h2>
      <div style = {{ width: '27%'}} className="container experience__container">
        <div >
          <h3>Front-end</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Html</h4>
          </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Css</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Javascript</h4>
            </article>
            
          </div>
        </div>
        </div>
    </section>
    
  )
}

export default Experience