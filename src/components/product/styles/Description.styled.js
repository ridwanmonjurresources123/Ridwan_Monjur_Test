import styled from 'styled-components'

let Description = styled.div`
    display: flex; 
`

Description.Preview = styled.span`
    flex-basis: 50%;
    & img {
        max-width: 80%;
        margin: 0 10%;   
    }
`
Description.ControlPreview = styled.span`
    flex-basis: 10%;
    & img {
        max-width: 80%;
        margin: auto; 
    }
`


Description.Text = styled.span`
    flex-basis: 40%;   
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