import React from 'react'
import './About.css'
import theme from '../../assets/theme.svg'
import chirag from '../../assets/chirag.jpg'

const About = () => {
  return (
    <div className='about'>
     <div className="about-title">
      <h1>About me</h1>
      <img src={theme} alt="" />
     </div>
     <div className="about-sections">
      <div className="about-left">
        <img src={chirag} alt="" />
      </div>
      <div className="about-right">
        <div className="about-para">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officiis obcaecati omnis autem ullam quasi similique adipisci necessitatibus sequi explicabo eum, odit distinctio illo fuga neque quaerat dolor inventore fugiat?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quidem minima, itaque iure accusamus eos commodi explicabo! Eius</p>
        </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML</p><hr style={{width : "60%"}}/></div>
            <div className="about-skill"><p>CSS</p><hr style={{width : "70%"}}/></div>
            <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width : "60%"}}/></div>
            <div className="about-skill"><p>REACT JS</p><hr style={{width : "70%"}}/></div>
          </div>
      </div>
     </div>
    </div>
  )
}

export default About