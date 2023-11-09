"use client"
import "./App.css";
import Carousel from "./CarouselPage2";

function TestimonialPage2() {
    const props = {

        img_one: 'https://images.creativefabrica.com/products/previews/2023/05/11/zZEZKFvQo/2Pdr8is8AS0vymhPaFPB1WOZ7DF-desktop.jpg',
        img_two: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg',
        img_alt: 'image_alt',
        style: {
          width: "100%",
          height: "400px",
          objectFit: 'cover',
      
      
        }
      }
      
        return (
          <>
            <h1
              style={{
                textAlign: "center",
              }}
            >
              Basic Carousel
            </h1>
      
            <div className="App">
              <Carousel props={props} />
            </div>
            <h2>OIIIIIIIIIII</h2>
          </>
        );
}

export default TestimonialPage2;