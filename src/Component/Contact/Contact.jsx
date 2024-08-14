import React from 'react'
import './Contact.css'
import theme from '../../assets/theme.svg'
import Mail from '../../assets/Mail.svg'
import call from '../../assets/call.svg'
import location from '../../assets/location.svg'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus laboriosam molestias reiciendis veniam eum alias nesciunt quis. </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                        <img src={Mail} alt="" /> <p>chiragbaranda12@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                          <img src={call} alt="" />  <p>+816-0869-700</p>
                        </div>
                        <div className="contact-detail">
                          <img src={location} alt="" /> <p>M-104 , Laxmivilla-2 ,new naroda , 382330</p> 
                        </div>
                    </div>
                    <form className="contact-right">
                        <label htmlFor="">Your name</label>
                        <input type="text" placeholder='Enter your name' name='name'/>
                        <label htmlFor="">Your Email</label>
                        <input type="email" placeholder='Enter your Email' name='email'/>
                        <label htmlFor="">Write your message here</label> 
                        <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                        <button type='submit'  className='contact-submit'>submit now</button>


                    </form>
                </div>
            </div>
        

    </div>
  )
}

export default Contact