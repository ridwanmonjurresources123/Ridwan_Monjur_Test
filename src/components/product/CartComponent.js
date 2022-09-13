import { Component } from 'react'
import { CartItem, Product } from './styles'


class CartComponent extends Component {
    constructor() {
        super()

    }

    render() {

        let {cart, isOverlay} = this.props


        let stringArray = cart.title.split(" ")

        let [first, ...remaining] = stringArray

        remaining = remaining.join(" ")

        return (

            <CartItem isOverlay={isOverlay}>
                <div>
                    <Product.Brand>
                        {first}
                    </Product.Brand>
                    <Product.Title>
                        {remaining}
                    </Product.Title>
                    <Product.Price>
                        ${cart.price}
                    </Product.Price>
                    {!isOverlay && <br/>}
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
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CartItem.QuantitySizebox isOverlay={isOverlay}>
                        <CartItem.Sizebox isOverlay={isOverlay} paddingX={"3px"} paddingY={"3px"}>+</CartItem.Sizebox>
                        <span style={{ margin: "auto" }}>1</span>
                        <CartItem.Sizebox isOverlay={isOverlay}  paddingX={"3px"} paddingY={"3px"}>-</CartItem.Sizebox>
                    </CartItem.QuantitySizebox>
                    <CartItem.Preview isOverlay={isOverlay} src={cart.src} />
                </div>
            </CartItem>

        )
    }
}

export default CartComponent
