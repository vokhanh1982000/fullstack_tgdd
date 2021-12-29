import * as actionTypes from "../constants/categoryConstants";

export const getCategoriesReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_REQUEST:
      return {
        loading: true,
        categories: [],
      };
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return {
        loading: false,
        categories: action.payload,
      };
    case actionTypes.GET_CATEGORIES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const createCategoriesReducer = (state = { category: {} }, action) => {
  switch (action.type) {
    case actionTypes.ADD_CATEGORY_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.ADD_CATEGORY_SUCCESS:
      return {
        loading: false,
        categories: action.payload,
      };
    case actionTypes.ADD_CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteCategoriesReducer = (state = { category: {} }, action) => {
  switch (action.type) {
    case actionTypes.DELETE_CATEGORY_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.DELETE_CATEGORY_SUCCESS:
      return {
        loading: false,
        category: action.payload,
        success: true,
      };
    case actionTypes.DELETE_CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};
