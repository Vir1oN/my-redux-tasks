import React, {  useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import ProductList from "./Components/ProductList";
import ShoppingCart from "./Components/ShoppingCart";
import Wishlist from "./Components/Wishlist";



export default function App() {

    return (
        <div className="App">
            <header>
                <ShoppingCart/>
                <Wishlist/>
            </header>

            <div className={'product-list-wrapper'}>
                <ProductList/>
            </div>
        </div>
    );
}
