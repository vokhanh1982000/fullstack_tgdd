import * as actionTypes from "../constants/productConstants";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

    const { data } = await axios.get("/items");

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

  export const addProduct = (product) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.ADD_PRODUCT_REQUEST });
  
      const { data } = await axios.post("/items", product, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("userInfo")).accessToken,
        },
      });
  
      dispatch({
        type: actionTypes.ADD_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.ADD_PRODUCT_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.DELETE_PRODUCT_REQUEST, payload: id });
    const { data } = await axios.delete("/items/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("userInfo")).accessToken,
      },
    });

    dispatch({
      type: actionTypes.DELETE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.DELETE_PRODUCT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const updateProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.UPDATE_PRODUCT_REQUEST, payload: product });
    const { data } = await axios.put("/items/" + product._id, product, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("userInfo")).accessToken,
      },
    });

    dispatch({
      type: actionTypes.UPDATE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.UPDATE_PRODUCT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
