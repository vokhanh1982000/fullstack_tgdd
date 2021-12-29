import * as actionTypes from "../constants/categoryConstants";
import axios from "axios";

export const getCategories = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_CATEGORIES_REQUEST });

    const { data } = await axios.get("/cates");

    dispatch({
      type: actionTypes.GET_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_CATEGORIES_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const addCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ADD_CATEGORY_REQUEST });
  
    const { data } = await axios.post("/cates", category, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("userInfo")).accessToken,
      },
    });

    dispatch({
      type: actionTypes.ADD_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.ADD_CATEGORY_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const deleteCategory = (idCate) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.DELETE_CATEGORY_REQUEST, payload: idCate });
  
    const { data } = await axios.delete("/cates/" + idCate, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("userInfo")).accessToken,
      },
    });

    dispatch({
      type: actionTypes.DELETE_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.DELETE_CATEGORY_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
