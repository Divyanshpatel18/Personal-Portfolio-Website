import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Newsapp from "../../img/newsapp.jpg"
import Texteditor from "../../img/texteditor.jpg"
import HOC from "../../img/hoc.png"
import Notemaker from "../../img/notemaker.jpg"
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Portfolio = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
        {/* heading */}
        <span style={{color:darkMode?'white':''}}>Recent Projects</span>
        <span>Portfolio</span>
        {/* slider */}
        <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true}
        className='portfolio-slider'>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Newsapp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Notemaker} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Texteditor} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio