import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
    <img src={Wave} alt="" style={{width:"100%"}} />
    <div className="f-content">
        <span>ShanTheTrader@gmail.com</span>
        <div className="f-icons">
        
            <a href="https://www.linkedin.com/in/divyansh-patel-7645771aa/"><LinkedIn color='white' size='3rem' /></a>
            <Instagram color='white' size='3rem' />
            <a href="https://github.com/Divyanshpatel18"><Github color='white' size='3rem'/></a>
          
        </div>
    </div>
    </div>
  )
}

export default Footer