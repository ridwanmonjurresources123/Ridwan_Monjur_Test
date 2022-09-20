import styled from 'styled-components'


let Card = styled.div`
  cursor: pointer;
  // text-align: center;
  position: relative;
  top: 0;
  left: 0;
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
  ${({ inStock }) => inStock && `
    font-weight: bolder;
  `}
  ${({ isOverlay }) => isOverlay && `
    font-weight: lighter;
  `}
`

Card.OutOfStock = styled.div`
  position: absolute;
  color: grey;
  top: 40%;
  left: 20%;
  text-transform: uppercase;
  font-size: 30px;
  text-decoration: none;
`

export default Card