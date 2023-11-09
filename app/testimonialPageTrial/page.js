"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
// or only core styles
// import '@splidejs/react-splide/css/core';
const TestimonialPage= () =>{
  return (
    <Splide
      options={{
        rewind: true,
        gap   : '1rem',
        perPage: 3,
      }}
      aria-label="My Favorite Images"
    >
      <SplideSlide 
      className="bg-white p-5"
      style={{ width: "80%" }}
      >
        <h1>Test 1</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
      </SplideSlide>
      <SplideSlide className="bg-white p-5">
        <h1>Test 2</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
      </SplideSlide>
      <SplideSlide className="bg-white p-5">
        <h1>Test 3</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
      </SplideSlide>
    </Splide>
  );
}
export default TestimonialPage;