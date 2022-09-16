import { current } from "@reduxjs/toolkit"

export const findCartInsertion = (state, payload) => {
    let indexToInsert = -1

    current(state).cart.forEach((value, index) => {

        console.log({ value, payload, index })

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
    return indexToInsert
}

export const insertAtIndex = (state, payload, index) => {
    let newCart = [...state.cart]

    newCart[index] = { ...payload, quantity: newCart[index].quantity + payload.quantity }

    return { ...state, cart: [...newCart] }
  }