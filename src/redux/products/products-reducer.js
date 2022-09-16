import { createReducer } from "@reduxjs/toolkit"
import { PAUSE } from "reduxjs-toolkit-persist"
import { changeCurrencyAction, fetchAllCurrenciesAndCategoriesAction } from "./products-action"

export const productState = {
  currentCurrency: {symbol: '$', label: 'USD', index: 0},
  currencies: [],
  categories: [],
  loading: false,
  error: ""
}

const currencyReducer = createReducer(productState, (builder) => {
  builder.addCase(changeCurrencyAction, (state, { payload }) => {
    let {index, symbol, label} = payload

    return {
      ...state,
      currentCurrency: {
        index, symbol, label
      }
    }
  })

  builder.addCase(fetchAllCurrenciesAndCategoriesAction.fulfilled, (state, { payload }) => {
    return {
      ...state,
      loading: false,
      currencies: [...payload.currencies],
      categories: [...payload.categories]
    }
  })

  builder.addCase(fetchAllCurrenciesAndCategoriesAction.rejected, (state, { payload }) => {
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
