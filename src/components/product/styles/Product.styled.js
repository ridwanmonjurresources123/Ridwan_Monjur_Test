import styled from 'styled-components'

let Product = {}

Product.Brand = styled.div`
    font-weight: bolder;
    ${({ fontSize }) => fontSize && `
        font-size: ${fontSize};
    `}
`

Product.Title = styled.div`
    font-weight: 300;
    ${({ fontSize }) => fontSize && `
        font-size: ${fontSize};
    `}
`

Product.Price = styled.div`
    font-weight: bolder;
    ${({ fontSize }) => fontSize && `
        font-size: ${fontSize};
    `}
`
Product.PriceFirsLetters = styled(Product.Price)`
    vertical-align: 3px;
`

Product.Subtitle = styled.div`
    font-size: small;
    font-weight: bolder;
    text-transform: uppercase;
`


export default Product