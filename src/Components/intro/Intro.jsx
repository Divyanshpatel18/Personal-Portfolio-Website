import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Intro = () => {
    const transition = { duration: 2, type: 'spring' }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hy! I Am</span>
                    <span>Divyansh</span>
                    <span className="intro-desc">I am currently pursuing Masters in Technology from IIPS DAVV Indore.Front End Developer with Intermediate Experience in React technology producing the Quality work.Currently I am sharpening my skills in MERN devlopment to develop both client and sever software.</span>
                    <br></br>
                    <span className="intro-desc">I believe that the skills that I have attained from the dynamic environment and competitive university life define me and I am looking forward to implementing and polishing them in any opportunity that I receive.</span>
                
                </div>
                <button className="i-button button">
                    Hire Me
                </button>
                <div className="i-icons">
                    <a href="https://github.com/Divyanshpatel18"><img src={Github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/divyansh-patel-7645771aa/"><img src={LinkedIn} alt="" />
                    </a>
                    <a href=""><img src={Instagram} alt="" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Boy} alt="" />
                <motion.img

                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}

                    src={glassesimoji} alt="" />
                <motion.div 
                className="floatingDiv"
                    initial={{top:'-4%',left:'74%'}}
                    whileInView={{left:'68%'}}
                    transition={transition}
                style={{ top: '-3%', left: '57%' }}>
                    <FloatingDiv  image={Crown} txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div 
                className="floatingDiv" 
                initial={{left:'9rem',top:'18rem'}}
                whileInView={{left:'1rem'}}
                transition={transition}
                
                style={{ top: '18.31rem', left: '1rem' }}>
                    <FloatingDiv image={thumbup} txt1='Responsive' txt2='sites' />
                </motion.div>

                {/* blur color divs */}
                <div className="blur"
                    style={{ background: "rgb(0 210 255)" }}></div>
                <div className="blur" style={{
                    background: '#CF15FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}></div>
            </div>


        </div>
    )
}

export default Intro