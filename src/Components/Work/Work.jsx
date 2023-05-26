import React from 'react'
import './Work.css'
import Upwork from'../../img/Upwork.png'
import Fiverr from'../../img/fiverr.png'
import Amazon from'../../img/amazon.png'
import Shopify from'../../img/Shopify.png'
import Facebook from'../../img/Facebook.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'
const Work = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
    <div className="work">

        {/* left side */}
           <div className="awesome">
                <span style={{color:darkMode?'white':''}}>Works for All these</span>
                <span>Brands and clients</span>
                <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio harum consequuntur est 
                    <br/>necessitatibus ut saepe. Neque, nisi explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>Odio harum veniamdistinctio necessitatibus ut saepe. Neque, nisi explicabo.
                </span>
                <button className="button s-button">
                     Hire me
                    </button>
               
                <div className="blur s-blur" style={{
                    background: "#ABF1FF94",
                    top: '4em',
                    left: '8rem'
                }}></div>
            </div>

            {/* right side */}
            <div className="w-right">
                <motion.div className="mainCircle"
                initial={{rotate:45}}
                whileInView={{rotate:0}}
                viewport={{margin:'-40px'}}
                // after it comes in view of 40px it will rotate
                transition={{duration:3.5,type:'spring'}}

                
                >
                    <div className="secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                {/* background circle */}
                <div className="backCircle blueCircle"></div>
                <div className="backCircle yellowCircle"></div>
            </div>
    </div>
  )
}

export default Work