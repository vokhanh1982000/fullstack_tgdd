import "./cartItem.css";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useState } from "react";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.img} alt={item.name} className="cardImg" />
      </div>
      <a href={`/detail/${item.product}`} className="cartItem__name">
        <p>{item.name}</p>
      </a>
      {item.discount == 0 ? (
        <p className="cartitem__price">{(item.priceOrigin).toLocaleString()}đ</p>
      ) : (
        <p className="cartitem__price">
          {((item.priceOrigin * (100 - item.discount)) / 100).toLocaleString()}đ
        </p>
      )}
      <div className="cartItem__count">
        <button onClick={(e) => qtyChangeHandler(item.product, Number(item.qty) - 1)}>
          <RemoveIcon />
        </button>
        <p style={{ margin: "5%" }}>{item.qty}</p>
        <button onClick={(e) => qtyChangeHandler(item.product, Number(item.qty) + 1)}>
          <AddIcon />
        </button>
      </div>

      {item.discount == 0 ? (
        <p className="cartitem__price">{(item.priceOrigin * item.qty).toLocaleString()}đ</p>
      ) : (
        <p className="cartitem__price">
          {(
            ((item.priceOrigin * (100 - item.discount)) / 100) *
            item.qty
          ).toLocaleString()}
          đ
        </p>
      )}
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <DeleteIcon style={{width:'70%'}}/>
      </button>
    </div>
  );
};

export default CartItem;
