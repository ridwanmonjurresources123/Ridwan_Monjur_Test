import styled from 'styled-components'

let Description = styled.div`
    display: flex; 
    flex-wrap: wrap;
    max-height: 80vh;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        max-height: min-content;
    }
`

Description.Preview = styled.span`
    flex-basis: 50%;
    text-align: center;
    & img {
        max-width: 80%;
        max-height: 80vh;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-basis: 100%; 
    }

`
Description.ControlPreview = styled.span`
    flex-basis: 10%;
    max-height: 80vh;
    text-align: center;
    overflow-y: auto;
    cursor-pointer;
    & img {
        max-width: 80%;
        margin: auto; 
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-basis: 100%; 
        oveflow-x: scroll;
        margin: 0 10%; 
        & img {
            width: 50px;
        }
    }
`


Description.Text = styled.span`
    flex-basis: 40%;   
    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-basis: 100%; 
        text-align: center;
    }
`

Description.AddToCart = styled.button`
    display: inline-block;
    cursor: pointer;
    padding: 15px;
    font-size: 15px;
    margin-right: 5px;
    margin-top: 10px;
    border: 0px solid black;
    background-color: ${({ theme }) => `${theme.colors.primary}`};
    color: ${({ theme }) => `${theme.colors.light}`};
    &:hover{
        background-color:  ${({ theme }) => `${theme.colors.hoverBg}`};
        color: black;
    }  
`

Description.AddToCartError = styled.div`
    color: red;
    margin-top: 5px;
    font-size: 12px;
`

export default Description