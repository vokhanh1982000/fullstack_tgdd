import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, qty) => async(dispatch, getState) => {
    const {data} = await axios.get(`/items/find/${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            priceOrigin: data.priceOrigin,
            discount: data.discount,
            gift: data.gift,
            img: data.img,
            qty
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
} 