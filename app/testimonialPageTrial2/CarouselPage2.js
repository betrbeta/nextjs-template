import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

function CarouselPage2({ props }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Splide
        aria-label="My Favorite Images"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        options={{
          alignItems: "center",
          width: "100%",
          rewind: true,
          autoplay: "true",
          perPage: 2.5,
          perMove: "1",
          gap: "2rem",
          height: "15rem",
          type: "loop",
          rewindSpeed: "3000",
          arrows: "true",
          pagination: "false",
          extensions: { AutoScroll },
          autoScroll: {
            speed: 3,
            pauseOnHover: true,
            pauseOnFocus: false,
          },
          breakpoints: {
            1000: {
              perPage: 1,
            },
          },
        }}

      >
        <SplideSlide
        >
          <img src={props.img_one} alt={props.img_alt} style={props.style} />
        </SplideSlide>
        <SplideSlide
          style={{
            width:"80%",
          }}
        >
          <img src={props.img_two} alt={props.img_alt} style={props.style} />
        </SplideSlide>
        <SplideSlide>
          <img src={props.img_one} alt={props.img_alt} style={props.style} />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default CarouselPage2;