import { graphQLClient } from "./gqlClient"
import { CURRENCIES_AND_CATEGORIES, ALL_PRODUCTS_BY_CATEGORY, 
    PRODUCT_BY_ID} from "./gqlQueries"

export async function fetchAllProductsByCategory(categoryName){
    return await graphQLClient.request(ALL_PRODUCTS_BY_CATEGORY(categoryName))
}

export async function fetchAllCurrenciesAndCategories(){
    return await graphQLClient.request(CURRENCIES_AND_CATEGORIES())
}

export async function fetchProducById(productId){
    return await graphQLClient.request(PRODUCT_BY_ID(productId))
}
