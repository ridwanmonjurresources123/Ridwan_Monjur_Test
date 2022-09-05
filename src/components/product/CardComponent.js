import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid } from './styles';


class CardComponent extends Component {
    constructor() {
        super()

        console.log(this.props)
    }

    render() {

        // No loop in this part, just expose component/ block made of elements!
        let {cardValue} = this.props
        
         return (
            <Card>
                <Link to="../category/women" replace>
                    <Card.Image src={cardValue.src} />
                    <Card.Title>
                        {cardValue.title}
                    </Card.Title>
                    <Card.Subtitle>
                        ${cardValue.price}
                    </Card.Subtitle>
                </Link>
            </Card>
        );
    }
}

export default CardComponent;
