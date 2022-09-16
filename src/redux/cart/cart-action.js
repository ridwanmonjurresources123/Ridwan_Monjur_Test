import { createAction } from "@reduxjs/toolkit"

export const addProductToCartAction = createAction("cart/addProductToCart")

export const removeProductToCartAction = createAction("cart/removeProductToCart")

export const incrementValueToCartAction = createAction("cart/incrementValueToCart")

export const decrementValueToCartAction = createAction("cart/decrementValueToCart")

export const editCartAttributeAction = createAction("cart/editCartAttribute")




