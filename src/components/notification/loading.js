import { Component } from 'react';
import styled from 'styled-components';
import Logo from '../../images/company.png';
import {NotificationContainer, NotificationMessage} from './Container.styled';

const LoadingSpinnerImg = styled.img`
    height: 50px;
    pointer-events: none;
    background-color: red;
    cursor: pointer;
    @media (prefers-reduced-motion: no-preference) {
        animation: App-logo-spin infinite 5s linear;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        animation: App-logo-spin infinite 10s linear;
    }

    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`


class Loading extends Component {
    render() {
        return (
            <NotificationContainer>
                <div>
                    <LoadingSpinnerImg src={Logo} className="App-logo" alt="logo" />
                    <NotificationMessage>Loading...</NotificationMessage>
                </div>
            </NotificationContainer>
        )
    }
}

export default Loading;
