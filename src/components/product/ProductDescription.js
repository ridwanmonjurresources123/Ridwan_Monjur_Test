import { Component } from 'react'
import { CartItem, Description, Product } from './styles'


class ProductDescription extends Component {
    constructor() {
        super()
    }

    render() {

        let { description } = this.props

        console.log({description})

        return (
            <>
                <Description.Text>
                    <Product.Brand>
                        {description.brand}
                    </Product.Brand>
                    <Product.Title>
                        {description.name}
                    </Product.Title>

                    <Product.Subtitle>
                        Size
                    </Product.Subtitle>
                    <div>
                        <CartItem.Sizebox paddingX={"3px"} paddingY={"6px"}>L</CartItem.Sizebox>
                        <CartItem.Sizebox paddingX={"3px"} paddingY={"6px"}>S</CartItem.Sizebox>
                        <CartItem.Sizebox paddingX={"3px"} paddingY={"6px"} active={true}>M</CartItem.Sizebox>
                    </div>


                    <Product.Subtitle>
                        Color
                    </Product.Subtitle>
                    <div>
                        <CartItem.Colorbox backgroundColor="grey" />
                        <CartItem.Colorbox backgroundColor="black" />
                        <CartItem.Colorbox backgroundColor="green" />
                    </div>

                    <Product.Subtitle>
                        Price
                    </Product.Subtitle>
                    <Product.Price>
                        ${description.prices[0].symbol} ${description.prices[0].amount}
                    </Product.Price>

                </Description.Text>
            </>
        )
    }
}

export default ProductDescription
