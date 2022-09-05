import styled from 'styled-components'

let Product = {}

Product.Brand = styled.div`
    font-weight: bolder;
`

Product.Title = styled.div`
    font-weight: 300;
`

Product.Price = styled.div`
    font-weight: bolder;
    font-size: smaller;
    ::first-letter {
        vertical-align: 3px;
    }
`

Product.Subtitle = styled.div`
    font-size: small;
    font-weight: bolder;
    text-transform: uppercase;
    font-stretch: ultra-condensed;
`


Product.Preview = styled.img`
vertical-align: baseline;
`

export default Product