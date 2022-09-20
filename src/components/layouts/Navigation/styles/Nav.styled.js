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
  margin-top: 10px;
`

Nav.Link = styled.span`
  display: inline;
  padding: 5px 60px 60px 0px;
  text-transform: uppercase;
  margin-right: 10px;
  & > a {
    color: black;
    text-decoration: none;
    ${({ active, theme }) => active && `
      box-sizing: border-box;
      color:  ${theme.colors.primary};
      border-bottom: 1px solid ${theme.colors.primary};
      padding-bottom: 15px;
      margin-bottom: 15px;
      // text-decoration: underline;
      // text-decoration-color: ${theme.colors.primary};
      // text-underline-offset: 10px; 
  `}
  }
`

export default Nav