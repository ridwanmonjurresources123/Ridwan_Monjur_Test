import styled from 'styled-components'

let CartItem = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgb(217, 215, 215);
    padding: 10px;
    margin: 0px;
    border-collapse: collapse;
`

CartItem.Sizebox = styled.span`
    cursor: pointer;
    display: inline-block;
    padding: ${({ paddingX, paddingY }) =>
        `${paddingX} ${paddingY}`} ;
    font-size: small;
    margin-right: 5px;
    border: 1px solid black;
    ${({ active }) => active && `
    background-color: black;
    color: white;

    ` }
    &:hover{
        background-color: rgb(217, 215, 215);
    }
    `

CartItem.Colorbox = styled.div`
    cursor: pointer;
    display: inline-block;
    padding: 10px;
    margin-right: 5px;
    border: 1px solid black;
    background-color: ${({ backgroundColor }) => backgroundColor}
    &:hover{
        background-color: rgb(217, 215, 215);
    }
`
CartItem.QuantitySizebox = styled.div`
    cursor: pointer;
    display: inline-flex;
    height: 80%;
    flex-direction: column;
    justify-content: space-around;
   
`
CartItem.Colorbox = styled.div`
    cursor: pointer;
    display: inline-block;
    padding: 10px;
    margin-right: 5px;
    border: 1px solid black;
    background-color: ${({ backgroundColor }) => backgroundColor};
    &:hover{
        padding: 9px;
    }
`

export default CartItem