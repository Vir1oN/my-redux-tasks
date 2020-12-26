import {
    ADD_TO_SHOPPING_CART,
    ADD_TO_WISHLIST,
    REMOVE_FROM_SHOPPING_CART,
    REMOVE_FROM_WISHLIST,
    SET_PRODUCTS
} from "../action-types";

export const setProducts = (products) => ({type: SET_PRODUCTS, payload: products})
export const fetchProducts = () => async (dispatch) => {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        let products = await response.json();
        dispatch(setProducts(products));
    } catch (e) {
        console.error(e);
    }
}
export const addToWishlist = (number) => async (dispatch) => {
    const product = await getProductByID(number);
    dispatch({type: ADD_TO_WISHLIST, payload: product});
}
export const addToShoppingCart = (number) => async (dispatch) => {
    const product = await getProductByID(number);
    dispatch({type: ADD_TO_SHOPPING_CART, payload: product});
}
export const removeFromWishlist = (number) => {
    return {type: REMOVE_FROM_WISHLIST, payload: number};
}
export const removeFromShoppingCart = (number) => {
    return {type: REMOVE_FROM_SHOPPING_CART, payload: number};
}

export const getProductByID = async (id) => {
    let response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await response.json();
}