import styled from 'styled-components'
import CartItem from "./CartItem.styled"
import Product from "./Product.styled"

let OverlayCartItem = styled(CartItem)`
    font-size: 15px;
    border-top: 0px solid rgb(217, 215, 215);
    gap: 50px;
    width: 350px;
    padding: 10px;
`
OverlayCartItem.Heading = styled.h1`
    padding: 10px;
`

OverlayCartItem.Brand = styled(Product.Brand)`
    font-weight: lighter;
    text-transform: none;
`

OverlayCartItem.Title = styled(Product.Title)`
    font-weight: lighter;   
`

OverlayCartItem.Price = styled(Product.Price)`
    font-weight: 600;    
    text-transform: none;
`
OverlayCartItem.PriceFirsLetters = styled(Product.PriceFirsLetters)

OverlayCartItem.Subtitle = styled(Product.Subtitle)`
    text-transform: none;
    font-weight: lighter;   
`

OverlayCartItem.Container = styled.div`
   height: min-content;
   max-height: 100vh;
   padding-bottom: 20px;
   overflow-y: auto; 
   overflow-x: visible;
`

OverlayCartItem.Colorbox = styled(CartItem.Colorbox)`
    font-size: 8px;
    margin-bottom: 0px;
    font-weight: lighter;   
`

OverlayCartItem.Sizebox = styled(CartItem.Sizebox)`
    margin-bottom: 0px;
    text-transform: none;
`

OverlayCartItem.QuantitySizebox = styled(CartItem.QuantitySizebox)`
    max-width: 50px;
    height: 60px !important;
       
`

OverlayCartItem.PreviewImg = styled(CartItem.PreviewImg)`
    max-width: 100px;
    margin-bottom: 0;
`

OverlayCartItem.ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    min-width: 300px;

`

OverlayCartItem.ButtonBase = styled.button`
    display: inline-block;
    cursor: pointer;
    padding: 15px;
    font-size: 15px;
    margin-right: 5px;
    margin-top: 10px;
    &:hover{
        background-color:  ${({ theme }) => `${theme.colors.hoverBg}`};
        color: black;
    }    
`

OverlayCartItem.ButtonViewCart = styled(OverlayCartItem.ButtonBase)`
    background-color: ${({ theme }) => `${theme.colors.light}`};
    border: 1px solid black;
`

OverlayCartItem.ButtonCheckoutCart = styled(OverlayCartItem.ButtonBase)`
    background-color: ${({ theme }) => `${theme.colors.primary}`};
    color: ${({ theme }) => `${theme.colors.light}`};
    border: 0px solid black;
`
    



export default OverlayCartItem