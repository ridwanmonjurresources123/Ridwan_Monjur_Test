import styled from 'styled-components'

let Description = styled.div`
    display: flex; 
`

Description.Preview = styled.span`
    flex-basis: 50%;

    & img {
        max-width: 80%;
        max-height: 60vh;
        margin: 0 10%;   
    }
`

Description.Text = styled.span`
    flex-basis: 40%;
    
`

Description.ControlPreview = styled.span`
    flex-basis: 10%;
    & img {
        max-width: 80%;
        max-height: 60vh;
        margin: auto; 
    }
`


export default Description