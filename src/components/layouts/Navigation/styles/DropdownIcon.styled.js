import styled from 'styled-components'

let DropdownIcon = styled.span`
font-size: 20px;
padding: 5px 10px;
// emoji color hack-> transparent , use text-shadow
color: rgba(100%, 0%, 0%, 0);
text-shadow: 0 0 black;
// emoji color hack-> transparent , use text-shadow
&:hover{
    background-color: ${({ theme }) => theme.colors.hoverBg};
}
&:active{
    background-color: ${({ theme }) => theme.colors.activeBg};
}
cursor: pointer;
`

DropdownIcon.Arrow = styled.span`
position: relative;
margin-left: 2px;
top: -8px;
`


export default DropdownIcon 