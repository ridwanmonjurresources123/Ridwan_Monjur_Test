import { combineReducers } from "@reduxjs/toolkit"
import productReducer, { productState } from "./products/products-reducer"
import cartReducer, { cartState } from "./cart/cart-reducers"

export const rootReducer = combineReducers({
  cartReducer,
  productReducer,
})

// export const migrations = {
//   1: () => {
//     return {
//       cartReducer: cartState,
//       productReducer: productState
//     }
//   },
// };

