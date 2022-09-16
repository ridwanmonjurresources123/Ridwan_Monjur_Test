import { createReducer, current } from "@reduxjs/toolkit"
import {
  addProductToCartAction,
  removeProductToCartAction,
  incrementValueToCartAction,
  decrementValueToCartAction,
  editCartAttributeAction
} from "./cart-action"
import { findCartInsertion, insertAtIndex } from "./cart-utils"

export const cartState = {
  cart: [],
  loading: false,
  error: ''
}

const cartReducer = createReducer(cartState, (builder) => {
  builder.addCase(addProductToCartAction, (state, { payload }) => {

    let indexToInsert = findCartInsertion(state, payload)

    if (indexToInsert >= 0) return insertAtIndex(state, payload, indexToInsert)

    else return { ...state, cart: [...state.cart, { ...payload }] }
  })

  builder.addCase(removeProductToCartAction, (state, { payload }) => {
    let newCart = [...current(state).cart.filter((index) => index !== payload.index)]

    return {
      ...state, cart: [...newCart]
    }
  })

  builder.addCase(editCartAttributeAction, (state, { payload }) => {
    let newCart = [...current(state).cart]

    newCart[payload.index] = {
      ...newCart[payload.index], selectedAttributes: {
        ...newCart[payload.index].selectedAttributes,
        [payload.attribute]:
          { id: payload.id, value: payload.value }
      }
    }

    return { ...state, cart: [...newCart] }
  })


  builder.addCase(incrementValueToCartAction, (state, { payload }) => {
    let newCart = [...current(state).cart]

    newCart[payload.index] = {
      ...newCart[payload.index], quantity: newCart[payload.index].quantity + payload.amount
    }

    return { ...state, cart: [...newCart] }
  })

  builder.addCase(decrementValueToCartAction, (state, { payload }) => {
    let newCart = []

    let newValue = current(state).cart[payload.index].quantity - payload.amount

    if (newValue <= 0) return

    else {
      newCart = [...current(state).cart]
      
      newCart[payload.index] = {
        ...newCart[payload.index], quantity: newValue
      }
    }
    return { ...state, cart: [...newCart] }
  })
})

export default cartReducer
