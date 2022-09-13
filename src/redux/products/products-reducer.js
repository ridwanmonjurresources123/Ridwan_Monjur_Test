import { createReducer } from "@reduxjs/toolkit"
import { PAUSE } from "reduxjs-toolkit-persist"
import { changeCurrencyAction, fetchAllCurrenciesAndCategoriesAction } from "./products-action"

export const productState = {
  currency: "USD",
  currencies: [],
  categories: [],
  loading: false,
  error: ""
}

const currencyReducer = createReducer(productState, (builder) => {
  builder.addCase(changeCurrencyAction, (state, { payload }) => {
    console.log({payload})
    return {}
  })

  builder.addCase(fetchAllCurrenciesAndCategoriesAction.fulfilled, (state, { payload }) => {
    console.log({payload})
    return {
      ...state,
      loading: false,
      currencies: payload.currencies,
      categories: payload.categories
    }
  })

  builder.addCase(fetchAllCurrenciesAndCategoriesAction.rejected, (state, { payload }) => {
    console.log({payload})
    return {
      ...state,
      loading: false
    }
  })

  builder.addCase(fetchAllCurrenciesAndCategoriesAction.pending, (state, { payload }) => {
    return {
      ...state,
      loading: true
    }
  })



})

export default currencyReducer
