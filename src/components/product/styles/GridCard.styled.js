import styled from 'styled-components'

let GridCard = styled.div`
    display: grid;
    grid-template-areas: "overlaydemo";
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`

export default GridCard