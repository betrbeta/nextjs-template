"use client";
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from "./../assets/images/img_1.jpg";
import slide_image_2 from "./../assets/images/img_2.jpg";
import slide_image_3 from "./../assets/images/img_3.jpg";
import slide_image_4 from "./../assets/images/img_4.jpg";
import slide_image_5 from "./../assets/images/img_5.jpg";
import slide_image_6 from "./../assets/images/img_6.jpg";
import slide_image_7 from "./../assets/images/img_7.jpg";


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
        depth: 100,
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
          <img src="https://source.unsplash.com/random/100x100" className='mx-auto rounded-full'/>
          <h1>Name</h1>
          <p>JOB</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias labore officiis quae maxime inventore, eaque tempore repellendus? Error sint ex earum minus illo nihil ipsa mollitia nemo quod maxime!</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random/100x100" className='mx-auto rounded-full'/>
          <h1>Name</h1>
          <p>JOB</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias labore officiis quae maxime inventore, eaque tempore repellendus? Error sint ex earum minus illo nihil ipsa mollitia nemo quod maxime!</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random/100x100" className='mx-auto rounded-full'/>
          <h1>Name</h1>
          <p>JOB</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias labore officiis quae maxime inventore, eaque tempore repellendus? Error sint ex earum minus illo nihil ipsa mollitia nemo quod maxime!</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random/100x100" className='mx-auto rounded-full'/>
          <h1>Name</h1>
          <p>JOB</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias labore officiis quae maxime inventore, eaque tempore repellendus? Error sint ex earum minus illo nihil ipsa mollitia nemo quod maxime!</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random/100x100" className='mx-auto rounded-full'/>
          <h1>Name</h1>
          <p>JOB</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias labore officiis quae maxime inventore, eaque tempore repellendus? Error sint ex earum minus illo nihil ipsa mollitia nemo quod maxime!</p>
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
