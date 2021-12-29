import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./carouselIm.css"

const CarouselIm = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.tgdd.vn/2021/07/banner/iphone-12-830-300-830x300.png"
          alt="sale"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.tgdd.vn/2021/08/banner/830-300-830x300-2.png"
          alt="sale"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.tgdd.vn/2021/08/banner/renoz-830-300-830x300.png"
          alt="sale"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselIm;
