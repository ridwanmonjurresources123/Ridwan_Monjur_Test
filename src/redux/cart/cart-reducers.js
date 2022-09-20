import { createReducer } from "@reduxjs/toolkit"
import {
  addProductToCartAction,
  removeProductToCartAction,
  incrementValueToCartAction,
  editCartAttributeAction
} from "./cart-action"

import { roundOffTwoDP } from './cart-utils'

export const cartState = {
  cart: [],
  total: [],
  totalQuantity: 0,
  loading: false,
  error: '',
  tax: 0.21
}

const cartReducer = createReducer(cartState, (builder) => {
  builder.addCase(addProductToCartAction, (state, { payload }) => {
    let newCart = [...state.cart]

    let total = [...state.total]

    let totalQuantity = state.totalQuantity

    totalQuantity += payload.quantity

    if (total.length === 0) {
      total = payload.prices.map((value) => {
        return roundOffTwoDP(value.amount)
      })
    }
    else {
      total = payload.prices.map((value, index) => {
        return roundOffTwoDP(value.amount + Number(total[index]))
      })
    }

    let indexToInsert = -1

    newCart.forEach((value, index) => {
      if (value.brand === payload.brand
        &&
        value.name === payload.name
        &&
        Object.keys(value.selectedAttributes).every((selectedAttributeKey) => {
          return payload.selectedAttributes[selectedAttributeKey].value
            ===
            value.selectedAttributes[selectedAttributeKey].value
        })
      ) {
        indexToInsert = index
      }
    })

    if (indexToInsert >= 0) {

      newCart[indexToInsert] = { ...payload, quantity: newCart[indexToInsert].quantity + payload.quantity }

      return {
        ...state,
        totalQuantity,
        total,
        cart: [...newCart],
      }
    }

    else {
      return {
        ...state,
        totalQuantity,
        total,
        cart: [...state.cart, { ...payload }]
      }
    }
  })

  builder.addCase(removeProductToCartAction, (state, { payload }) => {
    let priceOfRemoved = []

    let quantityOfRemoved = 0

    let newCart = [...state.cart.filter((value, index) => {
      if (index === payload.index) {
        priceOfRemoved.push(value.prices)

        quantityOfRemoved = value.quantity
      }

      return index !== payload.index
    })]

    return {
      ...state,
      cart: [...newCart],
      total: state.total.map((value, index) => {
        return roundOffTwoDP(Number(value) - (quantityOfRemoved * priceOfRemoved[index].amount))
      }),
      totalQuantity: state.totalQuantity - quantityOfRemoved
    }
  })

  builder.addCase(editCartAttributeAction, (state, { payload }) => {
    let remainingQuantity = 0

    let matchingIndex = -1

    let newCart = [...state.cart]

    newCart[payload.index] = {
      ...newCart[payload.index], selectedAttributes: {
        ...newCart[payload.index].selectedAttributes,
        [payload.attribute]:
          { id: payload.id, value: payload.value }
      }
    }

    newCart.forEach((value, index) => {
      if (index !== payload.index) {
        if (value.brand === newCart[payload.index].brand
          &&
          value.name === newCart[payload.index].name
          &&
          Object.keys(value.selectedAttributes).every((selectedAttributeKey) => {
            return newCart[payload.index].selectedAttributes[selectedAttributeKey].value
              ===
              value.selectedAttributes[selectedAttributeKey].value
          })
        ) {
          matchingIndex = index

          remainingQuantity = newCart[payload.index].quantity
        }
      }
    })

    let finalCart = []

    if (matchingIndex > -1) {
      for (let cartIndex = 0; cartIndex < newCart.length; cartIndex++) {
        if (cartIndex === matchingIndex) {
          finalCart.push({
            ...newCart[cartIndex],
            quantity: remainingQuantity + newCart[cartIndex].quantity
          })

          continue
        }

        if (cartIndex !== payload.index) {
          finalCart.push({
            ...newCart[cartIndex]
          })
        }
      }

      return {
        ...state,
        cart: finalCart,
      }
    }

    else {
      return {
        ...state,
        cart: [...newCart],
      }
    }
  })

  builder.addCase(incrementValueToCartAction, (state, { payload }) => {
    let newCart = [...state.cart]

    let total = state.total.map((value, index) => {
      return roundOffTwoDP(Number(value) + (payload.incrementQuantity * newCart[payload.index].prices[index].amount))
    })

    let newQuantity = newCart[payload.index].quantity + payload.incrementQuantity

    if (newQuantity < 0) return

    let totalQuantity = state.totalQuantity

    totalQuantity += payload.incrementQuantity

    if (newQuantity === 0) {
      return {
        ...state,
        cart: [...newCart.filter((_, index) => index !== payload.index)],
        total: [...total],
        totalQuantity
      }
    }

    // newQuantity >= 0

    newCart[payload.index] = {
      ...newCart[payload.index], quantity: newQuantity
    }

    return {
      ...state,
      cart: [...newCart],
      total: [...total],
      totalQuantity
    }
  })

})

export default cartReducer
