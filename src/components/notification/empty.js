import { Component } from 'react';
import styled from 'styled-components';
import { NotificationContainer } from './Container.styled';

const EmptyHeading = styled.h3`
    font-weight: lighter;
`

class EmptyNotification extends Component {
    render() {
        return (
            <NotificationContainer
                >
                <div>
                    <EmptyHeading>{this.props.message}</EmptyHeading>
                </div>
            </NotificationContainer>
        )
    }
}

export default EmptyNotification;
