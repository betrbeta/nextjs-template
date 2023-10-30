"use client";
import '../globals.css';

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function TestimonialPage() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slidesPerView: 3,
    mode: "free-snap",
  });

  return (
    <>
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <div className="card bg-white shadow-md rounded p-4">
          <img src="https://source.unsplash.com/random/100x100" alt="User 1" className="rounded-full" />
          <h2 className="text-xl font-bold mt-2">User 1</h2>
          <p className="text-gray-500">Software Engineer</p>
          <p className="mt-2">"This is first testimonial."</p>
        </div>
      </div>
      <div className="keen-slider__slide">
        <div className="card bg-white shadow-md rounded p-4">
          <img src="https://source.unsplash.com/random/101x101" alt="User 2" className="rounded-full" />
          <h2 className="text-xl font-bold mt-2">User 2</h2>
          <p className="text-gray-500">Product Manager</p>
          <p className="mt-2">"This is second testimonial."</p>
        </div>
      </div>
      <div className="keen-slider__slide">
        <div className="card bg-white shadow-md rounded p-4">
          <img src="https://source.unsplash.com/random/102x102" alt="User 3" className="rounded-full" />
          <h2 className="text-xl font-bold mt-2">User 3</h2>
          <p className="text-gray-500">Data Scientist</p>
          <p className="mt-2">"This is third testimonial."</p>
        </div>
      </div>
      
    </div>
    </>
  );
}
