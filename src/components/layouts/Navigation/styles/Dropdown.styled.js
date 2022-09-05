import styled from 'styled-components'

let Dropdown = styled.div`
position: relative;
font-size: 15px;
display: inline;
`

Dropdown.Button = styled.span`
padding: 10px;
border: 0px solid red;
display: inline-block;
cursor: pointer;
background-color: ${({ theme }) => theme.colors.header};
& :hover{
  background-color: gray;
}
`

Dropdown.Items = styled.div`
position: absolute;
top: 25px; 
left: 0px;
${({ isInvisible }) => isInvisible && `
  display: none;
`}
`

export default Dropdown 