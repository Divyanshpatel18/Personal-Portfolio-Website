import React from 'react'
import './Services.css'
import Heartemoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Services = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    const transition = { duration: 2, type: 'spring' }
    return (
        
        <div className="services" id="Services">
            {/* left side */}
            <div className="awesome">
                <span style={{color:darkMode?'white':''}}>My Awesome</span>
                <span>Skills</span>
                <span>I have got good software development skills in languages Java ,Javascript,Hibernate,React Js,Basic C and C++,Knowledge of databases like MongoDB,MySQL,Oracle.
                </span>
                <span>I have got good Image and video editing skills using Photoshop,Snapseed,InShot,SnapEdit.</span>
                <a href="/" alt="not yet available">
                    <button className="button s-button">
                        Download CV
                    </button>
                </a>
                <div className="blur s-blur" style={{
                    background: "#ABF1FF94",
                    top: '4em',
                    left: '8rem'
                }}></div>
            </div>
            {/* right side */}
            <div className="cards">
                <motion.div style={{ left: '14rem' }}
                whileInView={{left:'14rem'}}
                initial={{left:'25rem'}}
                transition={transition}
                
                >
                    <Card
                        emoji={Heartemoji}
                        heading={'Development'}
                        details={"Frontend and Backend development"}
                        
                    />
                </motion.div>

                <motion.div style={{ top: '12rem', left: '-6rem' }}
                whileInView={{top: '12rem', left: '-6rem' }}
                initial={{left:"-8rem"}}
                transition={transition}
                 >
                    <Card
                        emoji={Glasses}
                        heading={'Editing'}
                        details={"Photoshop,Inshot,Snapseed,SnapEdit"}
                    />
                </motion.div>

                <motion.div style={{ top: '19rem', left: '11rem' }}
                whileInView={{left:'14rem'}}
                initial={{left:'20rem'}}
                transition={transition} >
                    <Card

                        emoji={Humble}
                        heading={'Designing UI/UX'}
                        details={"Attractive and easy user interface"}
                    />
                </motion.div>

                <div className="blur"
                    style={{ background: "rgb(0 210 255)" }}></div>
                <div className="blur" style={{
                    background: '#CF15FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-23rem'
                }}></div>
            </div>
        </div>
    )
}

export default Services