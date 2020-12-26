import React, {  useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../redux";
import ProductItem from "./ProductItem";

export default function ProductList (){
    const {allProducts: {products}} = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            {products.map(product => <ProductItem item = {product} key = {product.id} />)}
        </div>
    );
}