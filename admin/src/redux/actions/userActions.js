import * as actionTypes from "../constants/userConstants";
import axios from "axios";

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_USERS_REQUEST });

    const { data } = await axios.get("/users", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch({
      type: actionTypes.GET_USERS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_USERS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const createUsers = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.CREATE_USERS_REQUEST });

    const { data } = await axios.post("/users", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch({
      type: actionTypes.CREATE_USERS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.CREATE_USERS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const updateUsers = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.UPDATE_USERS_REQUEST });

    const { data } = await axios.put(`/users/${id}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch({
      type: actionTypes.UPDATE_USERS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.UPDATE_USERS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const deleteUsers = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.DELETE_USERS_REQUEST });

    const { data } = await axios.delete(`/users/${id}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch({
      type: actionTypes.DELETE_USERS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.DELETE_USERS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const signin = (username, password) => async (dispatch) => {
  dispatch({ type: actionTypes.USER_SIGNIN_REQUEST, payload: {username, password} });
  try {
    const { data } = await axios.post("/auth/login", {username, password});

    dispatch({
      type: actionTypes.USER_SIGNIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: actionTypes.USER_SIGNIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: actionTypes.USER_SIGNOUT });
  // document.location.href = '/login';
};
