import React from "react";
import { Card } from "react-bootstrap";
import Rate from "../rate/Rate";
import "./item.css";

function Price({ props }) {
  const discount = props.discount;
  const priceOrigin = props.priceOrigin;
  const price = (priceOrigin * (100 - discount)) / 100;
  if (discount == 0) {
    return <Card.Text>{priceOrigin.toLocaleString()}</Card.Text>;
  } else {
    return (
      <>
        <Card.Text>
          <del>{priceOrigin.toLocaleString()}</del>
          <span> -{discount}%</span>
        </Card.Text>
        <Card.Text>{price.toLocaleString()} VNĐ</Card.Text>
      </>
    );
  }
}

const Item = ({ item }) => {
  return (
  <a href={`/detail/${item._id}`} className="link">
    <Card className="item" key={item._id}>
      <div className="moving-top">
      <Card.Img variant="top" src={item.img} className="img" />
      </div>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.status}</Card.Text>
        <Price props={item} />
        <Card.Text>{item.gift}</Card.Text>
        <Card.Text>
          <Rate rate={item.rate} />
        </Card.Text>
      </Card.Body> 
    </Card>
  </a>
  );
};

export default Item;
