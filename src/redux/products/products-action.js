import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchAllCurrenciesAndCategories } from "../../services/gqlApi"

export const changeCurrencyAction = createAction("products/changeCurrncy")

export const fetchAllCurrenciesAndCategoriesAction = createAsyncThunk(
    'products/fetchAllCurrenciesAndCategories',
    async () => {

        let response = await fetchAllCurrenciesAndCategories()

        return response
    }
)
