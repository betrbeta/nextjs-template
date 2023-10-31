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
    <div className="container max-w-full min-h-full">
      <h1 className='text-center my-3 font-weight-bold'>Testimonial Page</h1>
      <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={3}
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
      className='swiper_container text-slate-950 my-3'
      >
        <SwiperSlide className="bg-white p-5">
          <img src="https://source.unsplash.com/random/100x100" className='mx-auto rounded-full my-3'/>
          <FontAwesomeIcon icon={faQuoteLeft} className="mr-3" />
          <p className="font-medium my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias labore officiis quae maxime inventore, eaque tempore repellendus? Error sint ex earum minus illo nihil ipsa mollitia nemo quod maxime!</p>
          <div className="text-sm">
            <h1 className="font-normal">John Doe</h1>
            <p className="font-light">Software Engineer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white p-5">
          <img src="https://source.unsplash.com/random/100x100" className='mx-auto rounded-full my-3'/>
          <FontAwesomeIcon icon={faQuoteLeft} className="mr-3" />
          <p className="font-medium my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias labore officiis quae maxime inventore, eaque tempore repellendus? Error sint ex earum minus illo nihil ipsa mollitia nemo quod maxime!</p>
          <div className="text-sm">
            <h1 className="font-normal">John Doe</h1>
            <p className="font-light">Software Engineer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white p-5">
          <img src="https://source.unsplash.com/random/100x100" className='mx-auto rounded-full my-3'/>
          <FontAwesomeIcon icon={faQuoteLeft} className="mr-3" />
          <p className="font-medium my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias labore officiis quae maxime inventore, eaque tempore repellendus? Error sint ex earum minus illo nihil ipsa mollitia nemo quod maxime!</p>
          <div className="text-sm">
            <h1 className="font-normal">John Doe</h1>
            <p className="font-light">Software Engineer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white p-5">
          <img src="https://source.unsplash.com/random/100x100" className='mx-auto rounded-full my-3'/>
          <FontAwesomeIcon icon={faQuoteLeft} className="mr-3" />
          <p className="font-medium my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias labore officiis quae maxime inventore, eaque tempore repellendus? Error sint ex earum minus illo nihil ipsa mollitia nemo quod maxime!</p>
          <div className="text-sm">
            <h1 className="font-normal">John Doe</h1>
            <p className="font-light">Software Engineer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white p-5">
          <img src="https://source.unsplash.com/random/100x100" className='mx-auto rounded-full my-3'/>
          <FontAwesomeIcon icon={faQuoteLeft} className="mr-3" />
          <p className="font-medium my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias labore officiis quae maxime inventore, eaque tempore repellendus? Error sint ex earum minus illo nihil ipsa mollitia nemo quod maxime!</p>
          <div className="text-sm">
            <h1 className="font-normal">John Doe</h1>
            <p className="font-light">Software Engineer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white p-5">
          <img src="https://source.unsplash.com/random/100x100" className='mx-auto rounded-full my-3'/>
          <FontAwesomeIcon icon={faQuoteLeft} className="mr-3" />
          <p className="font-medium my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias labore officiis quae maxime inventore, eaque tempore repellendus? Error sint ex earum minus illo nihil ipsa mollitia nemo quod maxime!</p>
          <div className="text-sm">
            <h1 className="font-normal">John Doe</h1>
            <p className="font-light">Software Engineer</p>
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
