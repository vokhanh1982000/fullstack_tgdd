import * as actionTypes from "../constants/productConstants";
import axios from "axios";

export const getProducts = (category) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
    const { data } = await axios.get(category ? `/items?category=${category}` : "/items");

    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getSales = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_SALES_REQUEST });
    const { data } = await axios.get("/items/getSale");

    dispatch({
      type: actionTypes.GET_SALES_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_SALES_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getPhones = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PHONES_REQUEST });
    const { data } = await axios.get("/items/getPhone");

    dispatch({
      type: actionTypes.GET_PHONES_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_PHONES_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getLaptops = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_LAPTOPS_REQUEST });
    const { data } = await axios.get("/items/getLaptop");

    dispatch({
      type: actionTypes.GET_LAPTOPS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_LAPTOPS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/items/find/${id}`);
  
      dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
