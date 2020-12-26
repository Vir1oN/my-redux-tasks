import React, {useMemo} from "react";
import {useSelector} from "react-redux";
import './header.css';

export default function Wishlist (){
    const listItems = useSelector((state) => state.selectedProducts.wishList);
    const itemsSum = listItems.length && listItems.map(item => item.price).reduce(
        (accumulator, currentValue) => accumulator + currentValue);

    return (
        <div className={'list'}>
            <p><span>Wishlist: </span>{listItems.length} items</p>
            {!!itemsSum &&
            (<p>General sum: {itemsSum}</p>)
            }
        </div>
    );
}