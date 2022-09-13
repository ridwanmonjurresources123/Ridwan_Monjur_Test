import { createReducer } from "@reduxjs/toolkit"
import {
  addProductToCartAction,
  removeProductToCartAction,
  incrementValueToCartAction,
  decrementValueToCartAction,
} from "./cart-action"

let newArray = Array(5).fill({
  src: "https://cdn.shopify.com/s/files/1/0071/6665/6579/products/RunningT-shirtIMG_0762_720x.png?v=1600684690",
  title: "Apollo Running Shirt",
  price: 45
})

newArray = newArray.map((val, index)=> {
  return {...val, id: index}
})


export const cartState = {
  cart: newArray,
  loading: false,
  error: ''
}

const cartReducer = createReducer(cartState, (builder) => {
  builder.addCase(addProductToCartAction, (state, { payload }) => {
    return { ...state, cart: [...state.cart, ...payload] }
  })

  builder.addCase(removeProductToCartAction, (state, { payload }) => {
    return { ...state }
  })

  builder.addCase(incrementValueToCartAction, (state, { payload }) => {
    return {
      ...state, cart: state.cart.map((element) => {
        return element.id === payload.id ? { ...element, value: element.value + payload.value } : { ...element }
      })
    }
  })

  builder.addCase(decrementValueToCartAction, (state, { payload }) => {
    return {
      ...state, cart: state.cart.map((element) => {
        return element.id === payload.id ? { ...element, value: element.value - payload.value } : { ...element }
      })
    }
  })
})

export default cartReducer
