import React, {useState, useEffect} from "react";
import Carousel from "react-elastic-carousel";
import Item from "../item/Item";
import "./carouselItem.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1000, itemsToShow: 4 },
];

const CarouselItem = ({ products, loading, err }) => {
  return (
    <div className="App">
      <div className="carousel-wrapper">
        {loading ? (<h2>Loading...</h2>) : err ? (<h2>{err}</h2>): (
        <Carousel breakPoints={breakPoints}>
          {products.map((item) => (
            <Item item={item}/>
          ))}
        </Carousel>
        )}
      </div>
    </div>
  );
};

export default CarouselItem;
