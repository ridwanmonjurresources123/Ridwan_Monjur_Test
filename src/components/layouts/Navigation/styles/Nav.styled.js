import styled from 'styled-components'

let Nav = styled.nav`
  padding: 40px 0;
  vertical-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`
Nav.Icon = styled.img`
  height: 40px;
  width: 40px;
`

Nav.Link = styled.span`
  display: inline-block;
  padding: 5px 10px 0px 0px;
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

export default Nav