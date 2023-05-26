import React from 'react'
import {useState} from 'react'
import './Contact.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Contact = () => {
    const [done,setDone]=useState(false);
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
    
    <div className="contact" id="Contact">
        {/* left side */}
        <div className="l-contact">
            <span style={{color:darkMode?'white':''}}>Get in Touch</span>
            <span>Contact me</span>
        </div>
        <div className="blur l-blur1" style={{ background: "#e355b6a6" }}></div>
                <div className="blur l-blur2" style={{ background: "skyblue" }}></div>
        {/* right side */}
        <div className="r-contact">
            <form className='details' >
            <input type='text' name='user_name' className='inputs' placeholder='Name'/>
            <input type='email'name='user_email'  className='inputs' placeholder='Email'/>
            <textarea name='message' className='inputs'  style={{resize:'none'}}placeholder='Message'/>
            <input type="submit" value='send' className="button " />
            
            </form>
        </div> 
    </div>
  )
}

export default Contact