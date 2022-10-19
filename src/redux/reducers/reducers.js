import {combineReducers} from "redux";
import {productReducer,selectedProductReducer} from "./productReducer";

const reducers = combineReducers({
    allProducts:productReducer,
    productss:selectedProductReducer
})

export default reducers