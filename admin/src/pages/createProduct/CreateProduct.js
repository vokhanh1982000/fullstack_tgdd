import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts as listProducts,
  addProduct,
} from "../../redux/actions/productActions";
import { getCategories as listCategories } from "../../redux/actions/categoryActions.js";
import "./createProduct.css";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [priceOrigin, setPriceOrigin] = useState("");
  const [discount, setDiscount] = useState("");
  const [gift, setGift] = useState("");
  const [rate, setRate] = useState("");
  const [img, setImg] = useState("");
  const [cate, setCate] = useState("");
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { loading: loadingProduct, err, products } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const getCategories = useSelector((state) => state.getCategories);
  const { categories } = getCategories;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  const history = useHistory();

  const checkItem = products.find((product) => product.name === name && name);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !priceOrigin || !cate || !status) {
      return toast.warning("Please fill in all field!");
    }
    if (checkItem) {
      return toast.error("This product already Exists!");
    } else {
      dispatch(
        addProduct({
          name,
          priceOrigin,
          discount,
          gift,
          rate,
          img,
          cate,
          status,
        })
      );
      toast.success("Create product successful");
      history.push("/product");
    }
  };
  return (
    <div className="newProduct">
      <h3 className="addProductTitle">Create Product</h3>
      {/* {toast ? <Toast varient="success">{toast}</Toast> : ""} */}
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="field">
          <p>Product Name:</p>
          <input
            value={name}
            name="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="field">
          <p>Price Origin:</p>
          <input
            value={priceOrigin}
            name="priceOrigin"
            onChange={(event) => {
              setPriceOrigin(event.target.value);
            }}
          />
        </div>
        <div className="field">
          <p>Discount:</p>
          <input
            value={discount}
            name="discount"
            onChange={(event) => {
              setDiscount(event.target.value);
            }}
          />
        </div>
        <div className="field">
          <p>Gift:</p>
          <input
            value={gift}
            name="gift"
            onChange={(event) => {
              setGift(event.target.value);
            }}
          />
        </div>
        <div className="field">
          <p>Rate:</p>
          <input
            value={rate}
            name="rate"
            onChange={(event) => {
              setRate(event.target.value);
            }}
          />
        </div>
        <div className="field">
          <p>Image:</p>
          <input
            value={img}
            name="img"
            onChange={(event) => {
              setImg(event.target.value);
            }}
          />
        </div>
        <div className="field">
          <p>Cate:</p>
          <select
            name="cate"
            onChange={(event) => {
              setCate(event.target.value);
            }}
          >
            <option>All</option>
            {categories.map((category) => (
              <option value={category.nameCate}>{category.nameCate}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <p>Status:</p>
          <select
            name="status"
            onChange={(event) => {
              setStatus(event.target.value);
            }}
          >
            <option>All</option>
            <option value="TO SELL">TO SELL</option>
            <option value="SELLING">SELLING</option>
            <option value="SOLD">SOLD</option>
          </select>
        </div>
        <button type="submit" className="addProductButton">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
