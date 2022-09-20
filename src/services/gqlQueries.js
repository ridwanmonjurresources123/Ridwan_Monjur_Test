import { gql } from "graphql-request"

const ALL_PRODUCTS_BY_CATEGORY = (categoryName)=>  
gql`query {
    category(input: {title: "${categoryName}"}) {
      name
      products {
        id
        brand
        prices {
          amount 
          currency {
            symbol
            label
          }
        }
        name
        inStock
        gallery
      }
    }
  }
`


const CURRENCIES_AND_CATEGORIES = () => gql`
  query {
    currencies {
        symbol
        label
    }
    categories {
      name
    }
  }
`

const PRODUCT_BY_ID = (productId) => gql`
  query {
    product(id: "${productId}") {
      name
      inStock
      gallery
      description
      category
      attributes {
        name
        items {
          id
          value
          displayValue
        }
      }
      prices {
        amount
        currency {
          symbol
          label
        }
      }
      brand
    }
  }
`

export {
  PRODUCT_BY_ID,
  CURRENCIES_AND_CATEGORIES,  
  ALL_PRODUCTS_BY_CATEGORY,
}
