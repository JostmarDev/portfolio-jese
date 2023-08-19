import React from 'react';
import "./testimonials.css";
import Image1 from "../../assets/juan.svg";
import Image3 from "../../assets/kula.svg";

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: Image1,
    title: "Ing. Juan crisostomo lópez",
    subtitle: "Former Colleague & Trusted Friend",
    comment: "For me, Jese Jostmar is more than a former colleague; he's a treasured friend. We first met in school and later worked together. His steadfast integrity and unwavering support have profoundly enriched our friendship.! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "Diego Martinez",
    subtitle: "Systems Engineer",
    comment: "Jese Jostmar, a dear and valued friend of mine. We met online, and it was a pleasant coincidence that he's just starting his programming career. A successful future awaits us! 🌟",
  },
];


const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Clients & reviews</h2>

      <Swiper className="testimonials__container grid"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials