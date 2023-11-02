"use client";
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// import slide_image_1 from "./../assets/images/img_1.jpg";
// import slide_image_2 from "./../assets/images/img_2.jpg";
// import slide_image_3 from "./../assets/images/img_3.jpg";
// import slide_image_4 from "./../assets/images/img_4.jpg";
// import slide_image_5 from "./../assets/images/img_5.jpg";
// import slide_image_6 from "./../assets/images/img_6.jpg";
// import slide_image_7 from "./../assets/images/img_7.jpg";


function TestimonialPage() {
  return (
    <div className="container max-w-full min-h-full p-5">
      <h1 className='text-center my-3 font-weight-bold'>Testimonial Page</h1>
      <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
        },
      }}
      coverflowEffect={{
        rotate: 0,
        strectch: 0,
        depth: 100,
        modifier: 3.5,
        }
      }
      pagination={ {el:'.swiper-pagination', clickable:true}}
      navigation={ {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className='swiper_container text-slate-950 my-5 py-20 z-4'
      >
        <div className='container mt-12'>
        <SwiperSlide className="relative bg-white p-8 rounded-lg">
          <div className="relative">
            <img src="https://source.unsplash.com/random/120x120" className='mx-auto rounded-full absolute
            m-auto left-0 right-0 -translate-y-3/4 border-8 border-white drop-shadow-xl
            '/>
          </div>
          <div className="relative mt-16">
            <div className="text-center mt-5">
                <p className="font-medium text-xs text-cyan-400">Berlin</p>
                <h1 className="font-extrabold text-2xl my-0 p-0">John Doe</h1>
                <p className="font-medium text-xs text-cyan-400">Software Engineer</p>
            </div>
            <div className="mt-5 container">
              <FontAwesomeIcon icon={faQuoteLeft} className="mr-3" />
              <p className="font-normal my-3 text-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias labore officiis quae maxime inventore, eaque tempore repellendus? Error sint ex earum minus illo nihil ipsa mollitia nemo quod maxime!</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative bg-white p-8 rounded-lg">
          <div className="relative">
            <img src="https://source.unsplash.com/random/120x120" className='mx-auto rounded-full absolute
            m-auto left-0 right-0 -translate-y-3/4 border-8 border-white drop-shadow-xl
            '/>
          </div>
          <div className="relative mt-16">
            <div className="text-center mt-5">
                <p className="font-medium text-xs text-cyan-400">Berlin</p>
                <h1 className="font-extrabold text-2xl my-0 p-0">John Doe</h1>
                <p className="font-medium text-xs text-cyan-400">Software Engineer</p>
            </div>
            <div className="mt-5 container">
              <FontAwesomeIcon icon={faQuoteLeft} className="mr-3" />
              <p className="font-normal my-3 text-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias labore officiis quae maxime inventore, eaque tempore repellendus? Error sint ex earum minus illo nihil ipsa mollitia nemo quod maxime!</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative bg-white p-8 rounded-lg">
          <div className="relative">
            <img src="https://source.unsplash.com/random/120x120" className='mx-auto rounded-full absolute
            m-auto left-0 right-0 -translate-y-3/4 border-8 border-white drop-shadow-xl
            '/>
          </div>
          <div className="relative mt-16">
            <div className="text-center mt-5">
                <p className="font-medium text-xs text-cyan-400">Berlin</p>
                <h1 className="font-extrabold text-2xl my-0 p-0">John Doe</h1>
                <p className="font-medium text-xs text-cyan-400">Software Engineer</p>
            </div>
            <div className="mt-5 container">
              <FontAwesomeIcon icon={faQuoteLeft} className="mr-3" />
              <p className="font-normal my-3 text-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias labore officiis quae maxime inventore, eaque tempore repellendus? Error sint ex earum minus illo nihil ipsa mollitia nemo quod maxime!</p>
            </div>
          </div>
        </SwiperSlide>
        </div>
        <div className='slider-controller'>
          <div style={{
                "--swiper-navigation-color": "white",
                "--swiper-navigation-size": "10px",
              }}
            className='font-extrabold swiper-button-prev slider-arrow rounded-full bg-cyan-400 p-4'>
            {/* add icon here */}
          </div>
          <div style={{
                "--swiper-navigation-color": "white",
                "--swiper-navigation-size": "10px",
              }} 
            className='font-extrabold swiper-button-next slider-arrow rounded-full bg-cyan-400 p-4'>
            {/* add icon here */}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default TestimonialPage;
