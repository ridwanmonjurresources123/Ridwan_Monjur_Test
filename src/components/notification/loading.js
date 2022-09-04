import { Component } from 'react';
import styled from 'styled-components';
import Logo from '../../logo.svg';

const LoadingSpinnerImg = styled.img`
    
    height: 10vmin;
    pointer-events: none;
  
    @media (prefers-reduced-motion: no-preference) {
        animation: App-logo-spin infinite 20s linear;
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
  
`;


class Loading extends Component {
    render() {
        return <LoadingSpinnerImg src={Logo} className="App-logo" alt="logo" />;
    }
}

export default Loading;
