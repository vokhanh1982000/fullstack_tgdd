import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductDetails, updateProduct } from "../../redux/actions/productActions";
import "./infoProduct.css";
import { getCategories as listCategories } from "../../redux/actions/categoryActions";
import { toast } from "react-toastify";
import { ArrowBack } from '@material-ui/icons';
import { useHistory } from "react-router-dom";

const InfoUser = () => {
  const [img, setImg] = useState("");
  const [priceOrigin, setPriceOrigin] = useState("");
  const [discount, setDiscount] = useState("");
  const [gift, setGift] = useState("");
  const [rate, setRate] = useState("");
  const [cate, setCate] = useState("");
  const [status, setStatus] = useState("");
  const history = useHistory();

  const { productId } = useParams();
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, err, product, success } = productDetails;

  useEffect(() => {
    if (product && productId !== product._id) {
      dispatch(getProductDetails(productId));
    }
  }, [dispatch, product, productId]);

  useEffect(() => {
    if (success) {
      setImg(product.img);
      setPriceOrigin(product.priceOrigin);
      setDiscount(product.discount);
      setGift(product.gift);
      setRate(product.rate);
      setCate(product.cate);
      setStatus(product.status);
    }
  }, [product]);

  const getCategories = useSelector((state) => state.getCategories);
  const { categories } = getCategories;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  const updatePro = useSelector((state) => state.updateProducts);
  const {
    loading: loadingUpdate,
    error: errUpdate,
    success: successUpdate,
  } = updatePro;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!priceOrigin || !cate || !status) {
      return toast.warning("Please fill in all field!");
    }
    else {
      dispatch(
        updateProduct({
          _id: productId,
          name: product.name,
          priceOrigin,
          discount,
          gift,
          rate,
          img,
          cate,
          status,
        })
      );
    }
  };

  useEffect(() => {
    if(successUpdate == true) {
      toast.success("Update product successful");
      dispatch(getProductDetails(productId));
    }
    if(successUpdate == false) {
      toast.error("This product updated fail");
    }
  }, [successUpdate]);

  function handleBack() {
    history.push("/product");
  }

  return (
    <div className="product">
      <ArrowBack className="backIcon" onClick={handleBack}/>
      <div className="productTitleContainer">
        <h1 className="productTitle">Edit Product</h1>
      </div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <div className="productTop">
            <div className="productTopRight">
              <div className="productInfoTop">
                <img src={product.img} alt="" className="productInfoImg" />
                <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfoKey">id:</span>
                  <span className="productInfoValue">{product._id}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">name:</span>
                  <span className="productInfoValue">{product.name}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">price Origin:</span>
                  <span className="productInfoValue">
                    {product.priceOrigin}
                  </span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">discount:</span>
                  <span className="productInfoValue">{product.discount}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">gift:</span>
                  <span className="productInfoValue">{product.gift}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">rate:</span>
                  <span className="productInfoValue">{product.rate}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">cate:</span>
                  <span className="productInfoValue">{product.cate}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">status:</span>
                  <span className="productInfoValue">{product.status}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">created at:</span>
                  <span className="productInfoValue">{product.createdAt}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="productBottom">
            <form className="productForm">
              <div className="productFormLeft">
                <label>Price Origin</label>
                <input
                  type="text"
                  defaultValue={product.priceOrigin}
                  onChange={(event) => {
                    setPriceOrigin(event.target.value);
                  }}
                />
                <label>Discount</label>
                <input
                  type="text"
                  defaultValue={product.discount}
                  onChange={(event) => {
                    setDiscount(event.target.value);
                  }}
                />
                <label>Gift</label>
                <input
                  type="text"
                  defaultValue={product.gift}
                  onChange={(event) => {
                    setGift(event.target.value);
                  }}
                />
                <label>Rate</label>
                <input
                  type="text"
                  defaultValue={product.rate}
                  onChange={(event) => {
                    setRate(event.target.value);
                  }}
                />
                <label>Image</label>
                <input
                  type="text"
                  placeholder={product.img}
                  defaultValue={product.img}
                  onChange={(event) => {
                    setImg(event.target.value);
                  }}
                />
                <label>Cate</label>
                <select
                  name="cate"
                  onChange={(event) => {
                    setCate(event.target.value);
                  }}
                  defaultValue={product.cate}
                >
                  {categories.map((category) => (
                    <option value={category.nameCate}>
                      {category.nameCate}
                    </option>
                  ))}
                </select>
                <label>Status</label>
                <select
                  name="status"
                  onChange={(event) => {
                    setStatus(event.target.value);
                  }}
                  defaultValue={product.status}
                >
                  <option value="TO SELL">TO SELL</option>
                  <option value="SELLING">SELLING</option>
                  <option value="SOLD">SOLD</option>
                </select>
              </div>
              <div className="productFormRight">
                <div className="productUpload">
                  <img
                    src={img}
                    alt="image"
                    className="productUploadImg"
                  />

                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="productButton" onClick={handleSubmit}>Update</button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default InfoUser;
