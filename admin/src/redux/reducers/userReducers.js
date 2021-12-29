import * as actionTypes from "../constants/userConstants";

export const getUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_REQUEST:
      return {
        loading: true,
        users: [],
      };
    case actionTypes.GET_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case actionTypes.GET_USERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.CREATE_USERS_REQUEST:
      return {
        loading: true,
        users: [],
      };
    case actionTypes.CREATE_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case actionTypes.CREATE_USERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.UPDATE_USERS_REQUEST:
      return {
        loading: true,
        users: [],
      };
    case actionTypes.UPDATE_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case actionTypes.UPDATE_USERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.DELETE_USERS_REQUEST:
      return {
        loading: true,
        users: [],
      };
    case actionTypes.DELETE_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case actionTypes.DELETE_USERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGNIN_REQUEST:
      return { loading: true };
    case actionTypes.USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload, success: true };
    case actionTypes.USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload, success: false };
    case actionTypes.USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};
