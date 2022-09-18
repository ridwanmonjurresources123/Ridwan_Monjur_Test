import styled from 'styled-components'

let CartItem = styled.div`
    display: flex;
    border-top: 1px solid rgb(217, 215, 215);
    justify-content: space-between;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 20px;
`

CartItem.ItemContainer = styled.div`
   height: 100vh;
   overflow-y: auto; 
   overflow-x: visible;
`

CartItem.Colorbox = styled.label`
    cursor: pointer;
    display: inline-block;
    padding: 10px;
    margin-right: 5px;
    border: 1px solid black;
    background-color: ${({ backgroundColor }) => `${backgroundColor}`};
    ${({ active }) => active && `
        padding: 12px;
    ` }
    &:hover{
        outline: 1px solid ${({ theme }) => `${theme.colors.primary}`};
        padding: 9px;
    }
`

CartItem.Sizebox = styled.label`
    cursor: pointer;
    display: inline-block;
    padding: ${({ paddingX, paddingY }) =>
        `${paddingX} ${paddingY}`} ;
    font-size: small;
    margin-bottom: 20px;
    margin-right: 5px;
    border: 1px solid black;
    ${({ active }) => active && `
        background-color: black;
        color: white;
        font-weight: lighter;
        margin-bottom: 0px;
    ` }
    &:hover{
        background-color:  ${({ theme }) => `${theme.colors.hoverBg}`};
    }
`


CartItem.QuantitySizebox = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80%;
`


CartItem.PreviewTabContainer = styled.div`
    height: min-content;
    max-height: 350px;
    background-color: 1px solid red;
    position: relative;
`

CartItem.PreviewTabController = styled.div`
   cursor: pointer;
   display: inline-block;
   position: absolute;
   width: 20px;
   text-align: center;
   background-color: black;
   color: white;
   bottom: 10px;
   z-index: 999;
`

CartItem.PreviewTabControllerLeft = styled(CartItem.PreviewTabController)`
   left: 75%;
`

CartItem.PreviewTabControllerRight = styled(CartItem.PreviewTabController)`
   right: 1%;
`

CartItem.PreviewImg = styled.img`
    max-width: 250px;
    width: 350px;
    max-height: 350px;
    margin-bottom: 10px;
`

CartItem.Warning = styled.div`
    position: fixed;
    left: 30%;
    padding: 10px;
    top: 50vh;
    background-color: black;
    color: white;
    ${({hidden})=>hidden &&
        `display: none;`
    }
`

export default CartItem