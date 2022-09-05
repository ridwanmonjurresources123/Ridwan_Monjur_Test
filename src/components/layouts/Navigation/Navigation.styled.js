import styled from 'styled-components'

export const Nav = styled.nav`
  padding: 40px 0;
  vertical-align: center;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`
export const Nav__Icon = styled.img`
  height: 40px;
  width: 40px;
`

export const Nav__Link = styled.span`
  text-align: center;
  display: iline-block;
  padding: 5px 10px;
  text-transform: uppercase;

  & > a {
    color: black;
    text-decoration: none;

    ${({ active, theme }) => active && `
      text-decoration: underline;
      color:  ${theme.colors.primary};
      text-decoration-color: ${theme.colors.primary};
      text-underline-offset: 10px; 
  `}
  }
`

export const Dropdown__Menu = styled.div`
  position: relative;
  font-size: 15px;
  display: inline;
`

export const Dropdown__Button = styled.span`
  padding: 10px;
  border: 0px solid red;
  display: inline-block;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.header};
  & :hover{
    background-color: gray;
  }
`

export const Dropdown__Items = styled.div`
  position: absolute;
  top: 25px; 
  left: 0px;
  ${({ isInvisible }) => isInvisible && `
    display: none;
  `}
`