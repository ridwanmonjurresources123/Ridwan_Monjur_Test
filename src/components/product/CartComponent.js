import { Component } from 'react';
import { Link } from 'react-router-dom';
import { CartItem, Product } from './styles';


class CartComponent extends Component {
    constructor() {
        super()

        console.log(this.props)
    }

    render() {
        console.log(this.props)

        let {cart} = this.props

        return (


            <CartItem>
                <div>
                    <Product.Brand>
                        {cart.first}
                    </Product.Brand>
                    <Product.Title>
                        {cart.remaining}
                    </Product.Title>
                    <Product.Price>
                        ${cart.price}
                    </Product.Price>
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
                <div style={{ display: "flex", alignItems: "center" }}>
                    <CartItem.QuantitySizebox>
                        <CartItem.Sizebox paddingX={"3px"} paddingY={"3px"}>+</CartItem.Sizebox>
                        <span style={{ margin: "auto" }}>1</span>
                        <CartItem.Sizebox paddingX={"3px"} paddingY={"3px"}>M</CartItem.Sizebox>
                    </CartItem.QuantitySizebox>
                    <Product.Preview src={cart.src} width={160} />
                </div>
            </CartItem>

        );
    }
}

export default CartComponent;
