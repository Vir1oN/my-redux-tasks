import {combineReducers} from "redux";
import {productsReducer} from "./ProductsReducer";
import {selectedProductsReducer} from "./SelectedProductsReducer";

export const reducer = combineReducers({allProducts: productsReducer, selectedProducts: selectedProductsReducer});

export default reducer;