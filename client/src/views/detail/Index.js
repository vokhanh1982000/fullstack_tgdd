import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import NavbarD from "../../components/navbar/NavbarD";
import NavbarSm from "../../components/navbarSm/NavbarSm";
import "./index.css";
import Rate from "../../components/rate/Rate";
import { Button, Spinner } from "react-bootstrap";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";

import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";

// function Total({ price, count }) {
//   const total = price * count;
//   return <p>Tổng tiền : {total}</p>;
// }

// function Price({ priceOrigin, discount }) {
//   const price = (priceOrigin * (100 - discount)) / 100;
//   // return <h4>{price}</h4>
//   return price
// }
// console.log(price)

const Index = () => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, err, product } = productDetails;

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, product, id]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push("/cart");
  };

  return (
    <>
      <NavbarD />
      <NavbarSm />
      {loading ? (
        <h2>Loading...</h2>
      ) : err ? (
        <h2>{err}</h2>
      ) : (
        <div className="container-lg">
          <div className="intro">
            <h4>{product.name}</h4>
            <Rate rate={product.rate} />
          </div>
          <hr />
          <div className="info">
            <div className="imgProduct">
              <img src={product.img} className="imgItem"></img>
            </div>
            <div className="moreInfo">
              {/* <Price props={item} /> */}
              {product.discount == 0 ? (
                <h4 className="total">
                  {(product.priceOrigin).toLocaleString()}đ
                </h4>
              ) : (
                <div className="price">
                  {/* <Price
                      priceOrigin={product.priceOrigin}
                      discount={product.discount}
                    /> */}
                  <h4 className="total">
                    {(
                      (product.priceOrigin * (100 - product.discount)) /
                      100
                    ).toLocaleString()}
                    đ
                  </h4>

                  <del>{product.priceOrigin}</del>
                  <span className="total"> -{product.discount}%</span>
                </div>
              )}
              <h5>{product.gift}</h5>
              <h4>{product.status}</h4>
              <input
                type="range"
                id="qty"
                name="qty"
                min="1"
                max="10"
                step="1"
                defaultValue="1"
                onChange={(event) => {
                  setQty(event.target.value);
                }}
                className="range"
              />
              <p>Số lượng: {qty}</p>

              {product.discount == 0 ? (
                <h4 className="total">{(product.priceOrigin * qty).toLocaleString()}</h4>
              ) : (
                <h4 className="total">
                  {(
                    ((product.priceOrigin * (100 - product.discount)) / 100) *
                    qty
                  ).toLocaleString()}
                  đ
                </h4>
              )}
              <Button onClick={addToCartHandler}>
                Thêm vào giỏ hàng
                <ShoppingCartOutlinedIcon />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
