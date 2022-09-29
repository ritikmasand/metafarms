import React, { useState } from "react";
import img from "../../Assets/s1.png";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 imgborder"
          //src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
          src="https://thumbs.dreamstime.com/b/vegetable-rows-pepper-grow-field-farming-agriculture-landscape-agricultural-land-banner-selective-focus-147015451.jpg"
          height={650}
        />
        <Carousel.Caption>
          <h3 className="black">
            <b>Meta farms</b>
          </h3>
          <p>Image description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgborder"
          // src="holder.js/800x400?text=Second slide&bg=282c34"
          alt=""
          src="https://i.natgeofe.com/n/748f1c42-0d8b-498e-85fd-88151c6f863b/01_organic_farming_i8860_20181003_11260.jpg"
          height={650}
          margin-auto={50}
        />

        <Carousel.Caption>
          <h3 className="black">
            <b>Meta farms</b>
          </h3>
          <p>Image description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgborder"
          //src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          src="https://imageio.forbes.com/specials-images/imageserve/60be2a2abf86585e72b7aeee/0x0.jpg?format=jpg&width=1200"
          height={650}
          margin-auto={50}
        />

        <Carousel.Caption>
          <h3 className="black">
            <b>Meta farms</b>
          </h3>
          <p>Image description</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
