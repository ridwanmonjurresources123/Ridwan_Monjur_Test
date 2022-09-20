import { combineReducers } from "@reduxjs/toolkit"
import productReducer from "./products/products-reducer"
import cartReducer from "./cart/cart-reducers"

export const rootReducer = combineReducers({
  cartReducer,
  productReducer,
})


