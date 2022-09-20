import { Component } from 'react';
import styled from 'styled-components';
import {NotificationContainer, NotificationMessage} from './Container.styled';

const ErrorImg = styled.span`
   font-size: 60px;
   cursor: pointer;
`

class ErrorNotification extends Component {
    render() {
        return (
            <NotificationContainer>
                <div>
                    <ErrorImg>⚠️</ErrorImg>
                    <NotificationMessage>{this.props.message}</NotificationMessage>
                </div>
            </NotificationContainer>
        )
    }
}

export default ErrorNotification;
