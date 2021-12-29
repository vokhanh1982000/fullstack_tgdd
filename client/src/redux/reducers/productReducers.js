import * as actionTypes from "../constants/productConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getSalesReducer = (state = { sales: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_SALES_REQUEST:
      return {
        loading: true,
        sales: [],
      };
    case actionTypes.GET_SALES_SUCCESS:
      return {
        loading: false,
        sales: action.payload,
      };
    case actionTypes.GET_SALES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getPhonesReducer = (state = { phones: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PHONES_REQUEST:
      return {
        loading: true,
        phones: [],
      };
    case actionTypes.GET_PHONES_SUCCESS:
      return {
        loading: false,
        phones: action.payload,
      };
    case actionTypes.GET_PHONES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getLaptopsReducer = (state = { laptops: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_LAPTOPS_REQUEST:
      return {
        loading: true,
        laptops: [],
      };
    case actionTypes.GET_LAPTOPS_SUCCESS:
      return {
        loading: false,
        laptops: action.payload,
      };
    case actionTypes.GET_LAPTOPS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_PRODUCT_DETAILS_RESET,
  });
};
