import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Grid } from './styles'


class CardComponent extends Component {
    constructor() {
        super()
    }

    generateLinkIfOutOfStock(inStock) {
        return inStock ?
            null
            : { style: { pointerEvents: "none" } }
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
            <>
                <Card>
                    <Link  {...this.generateLinkIfOutOfStock(cardValue.inStock)} to={`../product/${cardValue.id}`} replace>

                        <Card.Image src={cardValue.gallery[0]} />
                        <Card.Title>
                            {cardValue.brand} {cardValue.name}
                        </Card.Title>
                        {cardValue.inStock ? <></> : <Card.OutOfStock>Out of Stock</Card.OutOfStock>}

                        <Card.Subtitle inStock={cardValue.inStock}>
                            ${cardValue.prices[0].amount}
                        </Card.Subtitle>
                    </Link>

                </Card>

            </>
        )
    }
}

export default CardComponent
