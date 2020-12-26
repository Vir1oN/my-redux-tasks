import React, {useMemo} from "react";
import {useSelector} from "react-redux";
import './header.css';

export default function ShoppingCart (){
    const cartItems = useSelector((state) => state.selectedProducts.shoppingCart);
    const itemsSum = cartItems.length && cartItems.map(item => item.price).reduce(
        (accumulator, currentValue) => accumulator + currentValue);

    return (
        <div className={'cart'}>
            <p><span>Shopping cart: </span>{cartItems.length} items</p>
            {!!itemsSum &&
            (<p>General sum: {itemsSum}</p>)
            }
        </div>
    );
}