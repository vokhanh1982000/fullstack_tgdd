import { Button } from "react-bootstrap";
import React, { useEffect } from "react";
import NavbarD from "../../components/navbar/NavbarD";
import NavbarSm from "../../components/navbarSm/NavbarSm";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/cartItem/CartItem";

import { addToCart, removeFromCart } from "../../redux/actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCarCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => (item.priceOrigin - ((item.priceOrigin * item.discount) / 100)) * item.qty + price, 0);
  };
  return (
    <div className="main">
      <NavbarD />
      <NavbarSm />
      <div className="cartscreen">
        <div className="cartscreen__left">
          <div className="title">
          <h2>Shopping cart</h2>
          <h4 className="goShop"><a href="/">Go Shopping</a></h4>
          </div>
          {cartItems.length == 0 ? (
            <>
              <h4>Your cart is empty</h4>
              <a href="/">Go shopping!</a>
            </>
          ) : (
            cartItems.map((item) => (
              <CartItem
              key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeHandler}
              />
            ))
          )}
        </div>
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCarCount()}) items</p>
            <p>{getCartSubTotal().toLocaleString()}đ</p>
          </div>
          <div>
            <Button>Thanh toán Paypal</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
