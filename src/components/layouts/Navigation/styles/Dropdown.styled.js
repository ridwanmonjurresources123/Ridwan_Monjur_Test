import styled from 'styled-components'

let Dropdown = styled.div`
  position: relative;
  font-size: 15px;
  display: inline-flex;
  justfy-content: center;
  z-index: 1;
`

Dropdown.MenuButton = styled.span`
  padding: 10px 0px;
  border: 0px solid red;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.header};
`

Dropdown.ItemContainer = styled.div`
  background: #fff;
  position: absolute;
  color: black;
  top: 50px; 
  right: 20px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    right: auto;
    left: -100px;
  }
  display: inline;
  border: 1px solid ${({ theme }) => theme.colors.hoverBg};
  box-shadow: 2px 3px ${({ theme }) => theme.colors.hoverBg};
  ${({ isInvisible }) => isInvisible && `
    display: none;
  `}
`

Dropdown.ItemDiv = styled.span`
  background: #fff;
  display: inline-block;
  padding: 10px;
  margin: 0;
  width: 100px;
  word-wrap: normal;
  white-space: nowrap;
  &:hover{
    background-color: ${({ theme }) => theme.colors.hoverBg};
  }
`

export default Dropdown 