import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  main{
    min-height: 70vh;
  }

  a{
    text-decoration: none;
    color: black;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
    padding: 0 5em;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      padding: 0.5em;
    }
  }

  p {
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }

  .active{
    text-decoration: underline;
    text-underline-offset: 10px; 
    ${({  theme }) => `
      color:  ${theme.colors.primary};
      text-decoration-color: ${theme.colors.primary};
  `}
  }
`

export default GlobalStyles
