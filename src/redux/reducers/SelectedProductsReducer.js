import {ADD_TO_SHOPPING_CART, ADD_TO_WISHLIST, REMOVE_FROM_SHOPPING_CART, REMOVE_FROM_WISHLIST} from "../action-types";

const initialState = {
    wishList: [],
    shoppingCart: [],
}

export const selectedProductsReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case ADD_TO_SHOPPING_CART: {
            return {...state, shoppingCart: [...state.shoppingCart, action.payload]};
        }
        case ADD_TO_WISHLIST: {
            return {...state, wishList: [...state.wishList, action.payload]};
        }
        case REMOVE_FROM_SHOPPING_CART: {
            let currentArr = [...state.shoppingCart];
            let i = currentArr.findIndex((value => value.id === action.payload));
            currentArr.splice(i, 1);

            return {...state, shoppingCart: currentArr};
        }
        case REMOVE_FROM_WISHLIST: {
            let currentArr = [...state.wishList];
            let i = currentArr.findIndex((value => value.id === action.payload));
            currentArr.splice(i, 1);

            return {...state, wishList: currentArr};
        }
        default:
            return state;
    }
}