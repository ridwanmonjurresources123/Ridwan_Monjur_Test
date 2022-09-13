import { createReducer } from "@reduxjs/toolkit"
import {
  addProductToCartAction,
  removeProductToCartAction,
  incrementValueToCartAction,
  decrementValueToCartAction,
} from "./cart-action"

export const cartState = {
  cart: [],
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
