import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilepic1 from '../../img/profile1.jpg';
import profilepic2 from '../../img/profile2.jpg';
import profilepic3 from '../../img/profile3.jpg';
import profilepic4 from '../../img/profile4.jpg';
import {Pagination} from 'swiper';
import 'swiper/css/pagination';

const Testimonial = () => {
    const clients = [{
        img: profilepic2,
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus cum eius, modi unde quasi fugiat, natus, fugit facere dicta in aperiam! Sint sequi illum temporibus possimus autem. Quasi hic, iste commodi amet alias at."

    }, {
        img: profilepic1,
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus cum eius, modi unde quasi fugiat, natus, fugit facere dicta in aperiam! Sint sequi illum temporibus possimus autem. Quasi hic, iste commodi amet alias at."

    },{
        img: profilepic3,
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus cum eius, modi unde quasi fugiat, natus, fugit facere dicta in aperiam! Sint sequi illum temporibus possimus autem. Quasi hic, iste commodi amet alias at."

    },{
        img: profilepic4,
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus cum eius, modi unde quasi fugiat, natus, fugit facere dicta in aperiam! Sint sequi illum temporibus possimus autem. Quasi hic, iste commodi amet alias at."

    }]
    return (
        <div className="testimonial" id="Testimonials">
            <div className="heading">
                <span>Client always get</span>
                <span>Exceptional work</span>
                <span>from me...</span>
                <div className="blur t-blur1" style={{ background: "#e355b6a6" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>
            <Swiper  modules={[Pagination]} slidesPerView={1} pagination={{clickable:true}}>

                    {clients.map((client,index)=>{
                        return (
                            <SwiperSlide key={index}>
                                <div className="testimonialNo">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })}
            </Swiper>

        </div>
    )
}

export default Testimonial