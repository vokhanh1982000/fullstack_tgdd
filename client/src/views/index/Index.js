import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CarouselIm from "../../components/carouselIm/CarouselIm";
import NavbarD from "../../components/navbar/NavbarD";
import NavbarSm from "../../components/navbarSm/NavbarSm";
import "./index.css";
import CarouselItem from "../../components/carouselItem/CarouselItem";
import {
  getProducts as listProducts,
  getPhones as listPhones,
  getLaptops as listLaptops,
  getSales as listSales,
} from "../../redux/actions/productActions";
import Item from "../../components/item/Item";

const Index = () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, err } = getProducts;

  useEffect(() => {
    dispatch(listProducts(category));
  }, [dispatch]);

  const getSales = useSelector((state) => state.getSales);
  const { sales, loading: loadingSales, err: errSales } = getSales;

  useEffect(() => {
    dispatch(listSales());
  }, [dispatch]);

  const getPhones = useSelector((state) => state.getPhones);
  const { phones, loading: loadingPhones, err: errPhones } = getPhones;

  useEffect(() => {
    dispatch(listPhones());
  }, [dispatch]);

  const getLaptops = useSelector((state) => state.getLaptops);
  const { laptops, loading: loadingLaptops, err: errLaptops } = getLaptops;

  useEffect(() => {
    dispatch(listLaptops());
  }, [dispatch]);

  return (
    <div>
      <NavbarD />
      <NavbarSm />
      <div className="caro">
        <CarouselIm className="carousel" />
        {/* <CarouselTi /> */}
      </div>
      {/* <div>
      <CarouselMain />
      </div> */}
      <img
        src="https://cdn.tgdd.vn/2021/08/banner/1200x60-1200x60-1.jpg"
        className="ente"
      ></img>
      <div className="container-lg-product">
        <h4 className="title-product">
          <b>
            <i>Sản phẩm</i>
          </b>
        </h4>
        <CarouselItem products={products} loading={loading} err={err}/>
      </div>
      <div className="container-lg-product">
        <h4 className="title-product">
          <b>
            <i>Siêu sale</i>
          </b>
        </h4>
        <CarouselItem products={sales} loading={loadingSales} err={errSales}/>
      </div>
      <div className="container-sm">
        <h4 className="title-product">
          <b>
            <i>Điện thoại nổi bật</i>
          </b>
        </h4>
        {loadingPhones ? (<h2>Loading...</h2>) : errPhones ? (<h2>{errPhones}</h2>): (
        <div className="listProduct">
          {phones.map((item) => (
            <Item item={item}/>
          ))}
        </div>
        )}
      </div>
      <div className="container-sm">
        <h4 className="title-product">
          <b>
            <i>Laptop nổi bật</i>
          </b>
        </h4>
        {loadingLaptops ? (<h2>Loading...</h2>) : errLaptops ? (<h2>{errLaptops}</h2>): (
        <div className="listProduct">
          {laptops.map((item) => (
            <Item item={item}/>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default Index;
