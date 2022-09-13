import { Component } from 'react'
import { connect } from 'react-redux'
import { CartItem, Description, Product } from './styles'


class ProductDescription extends Component {
    constructor() {
        super()
    }

    render() {

        let { description, currentCurrency } = this.props

        console.log({description, currentCurrency})

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
                        {currentCurrency.symbol} {description.prices[currentCurrency.index].amount}
                    </Product.Price>

                </Description.Text>
            </>
        )
    }
}



function mapStateToProps(state) {
    return {
        currentCurrency: state.productReducer.currentCurrency,
    }
}

export default connect(
    mapStateToProps
)(ProductDescription)
