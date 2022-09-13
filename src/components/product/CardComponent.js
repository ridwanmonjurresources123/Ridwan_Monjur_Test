import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Grid } from './styles'


class CardComponent extends Component {
    constructor() {
        super()

    }

    render() {

        // No loop in this part, just expose component/ block made of elements!
        let { cardValue } = this.props
        /* 
        brand: "Sony"
        gallery; (5) 
        id: "ps-5"
        inStock: false
        name: "PlayStation 5"
        prices: Array(5)
        */
        return (
            <Card>
                <Link to={`../product/${cardValue.id}`} replace>
                    <Card.Image src={cardValue.gallery[0]} />
                    <Card.Title>
                        {cardValue.brand} {cardValue.name}
                    </Card.Title>
                    <Card.Subtitle>
                        ${cardValue.prices[0].amount}
                    </Card.Subtitle>
                </Link>
            </Card>
        )
    }
}

export default CardComponent
