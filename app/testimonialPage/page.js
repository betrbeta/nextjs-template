"use client";
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function TestimonialPage() {
  return (
    <div className="container max-w-full min-h-full">
      <h1 className='text-center '>Testimonial Page</h1>
      <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        strectch: 0,
        depth: 200,
        modifier: 2.5,
        }
      }
      pagination={ {el:'.swiper-pagination', clickable:true}}
      navigation={ {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className='swiper_container'
      >
        <SwiperSlide>
        <div className="bg-green-400 max-w-[20%] mx-auto">
          <img src="https://source.unsplash.com/random/100x100" className='mx-auto rounded-full'/>
          <h1>Name</h1>
          <p>JOB</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias labore officiis quae maxime inventore, eaque tempore repellendus? Error sint ex earum minus illo nihil ipsa mollitia nemo quod maxime!</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-green-400 max-w-[20%] mx-auto">
          <img src="https://source.unsplash.com/random/100x100" className='mx-auto rounded-full'/>
          <h1>Name</h1>
          <p>JOB</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias labore officiis quae maxime inventore, eaque tempore repellendus? Error sint ex earum minus illo nihil ipsa mollitia nemo quod maxime!</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-green-400 max-w-[20%] mx-auto">
          <img src="https://source.unsplash.com/random/100x100" className='mx-auto rounded-full'/>
          <h1>Name</h1>
          <p>JOB</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias labore officiis quae maxime inventore, eaque tempore repellendus? Error sint ex earum minus illo nihil ipsa mollitia nemo quod maxime!</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-green-400 max-w-[20%] mx-auto">
          <img src="https://source.unsplash.com/random/100x100" className='mx-auto rounded-full'/>
          <h1>Name</h1>
          <p>JOB</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias labore officiis quae maxime inventore, eaque tempore repellendus? Error sint ex earum minus illo nihil ipsa mollitia nemo quod maxime!</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-green-400 max-w-[20%] mx-auto">
          <img src="https://source.unsplash.com/random/100x100" className='mx-auto rounded-full'/>
          <h1>Name</h1>
          <p>JOB</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias labore officiis quae maxime inventore, eaque tempore repellendus? Error sint ex earum minus illo nihil ipsa mollitia nemo quod maxime!</p>
        </div>
        </SwiperSlide>

        <div className='slider-controller'>
          <div className='swiper-button-prev slider-arrow'>
            {/* add icon here */}
          </div>
          <div className='swiper-button-next slider-arrow'>
            {/* add icon here */}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default TestimonialPage;
