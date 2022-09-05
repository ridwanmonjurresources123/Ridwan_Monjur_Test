import styled from 'styled-components'

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;

    & > div,
    & > ul {
        flex: 1;
    }



  padding: 100px 0 60px;

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    flex-direction: column;
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }

 
`
