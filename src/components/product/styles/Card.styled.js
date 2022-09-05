import styled from 'styled-components'

let Card = styled.div`
  cursor: pointer;
  // text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  & a {
    color: black;
    text-decoration: none;
  }
`

Card.Image = styled.img`
  display: block;
  height: 300px;
  width: 300px;
`

Card.Title = styled.div`
  margin-top: 25px;
  font-weight: 300;
`

Card.Subtitle = styled.div`
margin-top: 10px;
font-weight: bolder;
`

export default Card