import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid } from './styles';


class CardGrid extends Component {
    constructor() {
        super()

        console.log(this.props)
    }

    render() {
        console.log(this.props)

        return (
            <Grid>
                {
                   this.props.cardArray && this.props.cardArray.map((value) => 
                        <Card key={value.id}>
                            <Link to="../category/women" replace>
                                <Card.Image src={value.src} />
                                <Card.Title>
                                    {value.title}
                                </Card.Title>
                                <Card.Subtitle>
                                    ${value.price}
                                </Card.Subtitle>
                            </Link>
                        </Card>
                    )
                }
            </Grid>
        );
    }
}

export default CardGrid;
