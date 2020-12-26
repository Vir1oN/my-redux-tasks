import React, {useRef, useState} from "react";
import './ProductItem.css'
import {useDispatch} from "react-redux";
import {addToShoppingCart, addToWishlist, removeFromShoppingCart, removeFromWishlist} from "../redux";

export default function ProductItem(props) {
    let [itemInCart, toggleItemInCart] = useState(false);
    let [itemInList, toggleItemInList] = useState(false);

    const dispatch = useDispatch();

    const {item} = props;
    let {title, price, description, id} = item;

    const shoppingCartButton = useRef();
    const wishlistButton = useRef();

    const shoppingCartButtonStyle = {
        backgroundColor: itemInCart ? '#42ff1b' : 'white',
    };
    const wishlistButtonStyle = {
        backgroundColor: itemInList ? '#ffd201' : 'white'
    };

    const shoppingCartBtnHandler = () => {
        let newItemStatus = !itemInCart;
        newItemStatus ? dispatch(addToShoppingCart(id)) : dispatch(removeFromShoppingCart(id));

        toggleItemInCart(newItemStatus);
    }

    const wishlistButtonHandler = () => {
        let newItemStatus = !itemInList;
        newItemStatus ? dispatch(addToWishlist(id)) : dispatch(removeFromWishlist(id));

        toggleItemInList(newItemStatus);
    }

    return (
        <div className={'product'}>
            <h2>{title} - <span className={'price'}>{price}</span></h2>
            <p>{description}</p>
            <button className={'shop-btn'} style={shoppingCartButtonStyle} ref={shoppingCartButton} onClick={shoppingCartBtnHandler}>
                To Cart</button>
            <button className={'list-btn'} style={wishlistButtonStyle} ref={wishlistButton} onClick={wishlistButtonHandler}>
                To Wishlist</button>
            <hr/>
        </div>
    );
}