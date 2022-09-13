import styled from 'styled-components'

let Dropdown = styled.div`
position: relative;
font-size: 15px;
display: inline;
z-index: 1;
`

Dropdown.MenuButton = styled.span`
padding: 10px;
border: 0px solid red;
display: inline-block;
cursor: pointer;
background-color: ${({ theme }) => theme.colors.header};
&:hover{
  background-color: gray;
}
`

Dropdown.ItemContainer = styled.div`
background: #fff;
position: absolute;
color: black;
top: 25px; 
right: 0px;
${({ isInvisible }) => isInvisible && `
  display: none;
`}
`

Dropdown.ItemDiv = styled.div`
  background: #fff;
  padding: 0 10px;
  &:hover{
    background-color: gray;
    color: white
  }
`

export default Dropdown 