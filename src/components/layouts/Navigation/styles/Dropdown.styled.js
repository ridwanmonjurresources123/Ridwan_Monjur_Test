import styled from 'styled-components'

let Dropdown = styled.div`
position: relative;
font-size: 15px;
display: inline;
z-index: 1;
`

Dropdown.MenuButton = styled.span`
padding: 10px 40px;
border: 0px solid red;
display: inline-block;
background-color: ${({ theme }) => theme.colors.header};
`

Dropdown.ItemContainer = styled.div`
background: #fff;
position: absolute;
color: black;
top: 30px; 
right: 10px;
border: 1px solid ${({theme})=> theme.colors.hoverBg};
box-shadow: 2px 3px ${({theme})=> theme.colors.hoverBg};

${({ isInvisible }) => isInvisible && `
  display: none;
`}
`

Dropdown.ItemDiv = styled.div`
  background: #fff;
  padding: 10px 20px;
  &:hover{
    background-color: ${({theme})=> theme.colors.hoverBg};
  }
`

export default Dropdown 