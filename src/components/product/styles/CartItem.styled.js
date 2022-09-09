import styled from 'styled-components'

let CartItem = styled.div`
    display: flex;
    border-top: 1px solid rgb(217, 215, 215);
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 0px;
    ${({ isOverlay }) => isOverlay && `
        font-size: 15px;
        border-top: 0px solid rgb(217, 215, 215);
        gap: 50px;
        width: 300px;

    `}}
   
`

CartItem.Sizebox = styled.span`
    cursor: pointer;
    display: inline-block;
    padding: ${({ paddingX, paddingY }) =>
        `${paddingX} ${paddingY}`} ;
    font-size: small;
    margin-bottom: 20px;
    margin-right: 5px;
    ${({ isOverlay }) => isOverlay && `
        margin-bottom: 0px;
    ` }
    border: 1px solid black;
    ${({ active }) => active && `
    background-color: black;
    color: white;
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
    ${({ isOverlay }) =>
        isOverlay && `
            max-width: 50px;
            height: 60px !important;
        `
        ||
        !isOverlay && `
            height: 80%;
        `
    }
 
`

CartItem.Preview = styled.img`
    max-width: 350px;
    max-height: 350px;
    margin-bottom: 10px;
    ${({ isOverlay }) =>
        isOverlay && `
            max-width: 100px;
            max-height: 100px;
            margin-bottom: 0;

        `
    }

`

CartItem.Colorbox = styled.div`
    cursor: pointer;
    display: inline-block;
    padding: 10px;
    margin-right: 5px;
    border: 1px solid black;
    background-color: ${({ backgroundColor }) => `${backgroundColor}`};
    &:hover{
        background-color:  ${({ theme }) => `${theme.colors.hoverBg}`};
        padding: 9px;
    }
`

export default CartItem