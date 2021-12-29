import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getUsersReducer, userSigninReducer } from './reducers/userReducers';
import { getProductsReducer, getProductDetailsReducer, createProductsReducer, deleteProductsReducer, updateProductsReducer } from './reducers/productReducers';
import { getCategoriesReducer, createCategoriesReducer, deleteCategoriesReducer } from './reducers/categoryReducers';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    }
}

const reducer = combineReducers({
    getUsers: getUsersReducer,
    getProducts: getProductsReducer,
    getCategories: getCategoriesReducer,
    getProductDetails: getProductDetailsReducer,
    userSignin: userSigninReducer,
    createCategories: createCategoriesReducer,
    createProducts: createProductsReducer,
    deleteCategories: deleteCategoriesReducer,
    deleteProducts: deleteProductsReducer,
    updateProducts: updateProductsReducer,
})

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
