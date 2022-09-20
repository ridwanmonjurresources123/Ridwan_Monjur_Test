import { graphQLClient } from "./gqlClient"
import {
    CURRENCIES_AND_CATEGORIES, ALL_PRODUCTS_BY_CATEGORY, PRODUCT_BY_ID
} from "./gqlQueries"

export function fetchAllProductsByCategory(categoryName) {
    return graphQLClient.request(ALL_PRODUCTS_BY_CATEGORY(categoryName))
}

export function fetchProducById(productId) {
    return graphQLClient.request(PRODUCT_BY_ID(productId))
}


export async function fetchAllCurrenciesAndCategories() {
    return await graphQLClient.request(CURRENCIES_AND_CATEGORIES())
}



export function catchError(promise) {
    // await converts promise to non-promise, must be inside await
    return promise.then(data => {
        if (data)
            return { error: false, data }
        else throw new Error("Undefinded data")
    })
        .catch(error => {
            return { error, data: null }
        })
}

// export async function fetchAllProductsByCategory(categoryName) {
// let response = await catchError(graphQLClient.request(ALL_PRODUCTS_BY_CATEGORY(categoryName))
    // data => data.category?.products
// )

// function catchError(promise, reshape = (data)=> data)) {
//     // await converts promise to non-promise, must be inside await
//     return promise.then(data => {
//         if (data && reshape)
//             return { error: null, data: reshape(data) }
//         else throw new Error("Undefinded data")
//     })
//         .catch(error => {
//             return { error, data: null }
//         })
// }