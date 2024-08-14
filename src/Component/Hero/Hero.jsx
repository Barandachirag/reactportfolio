import React from 'react'
import './Hero.css'
import chirag from '../../assets/chirag.jpg'


const Hero = () => {
  return (
    <div className='Hero'> 
         <img src={chirag} alt="" />
         <h1><span>I'm chirag baranda ,</span> Frontend developer</h1>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque asperiores quia officia, vero iste quibusdam possimus quo? </p>
         <div className="hero-action">
            <div className="hero-connect">connect with me</div>
             <div className="hero-resume">My resume</div>
         </div>
        </div>
  )
}

export default Hero