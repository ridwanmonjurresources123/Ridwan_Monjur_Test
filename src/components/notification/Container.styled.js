import styled from 'styled-components'

const NotificationContainer = styled.div`
    display: inline-flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 50vh;
    text-align: center;
`

const NotificationMessage = styled.div`
    text-align: center;
    font-size: 16px;
    margin-top: 10px;
`

export { NotificationContainer, NotificationMessage }