import { Component } from 'react';
import { Link } from 'react-router-dom';
import { CartItem, Product } from './styles';


class Cart extends Component {
    constructor() {
        super()

        console.log(this.props)
    }

    render() {
        console.log(this.props)

        return (
            <>
                {
                    this.props.productArray && this.props.productArray.map((value) => {
                        let stringArray = value.title.split(" ")

                        let [first, ...remaining] = stringArray

                        remaining = remaining.join(" ")

                        return (
                            <CartItem key={value.id}>
                                <div>
                                    <Product.Brand>
                                        {first}
                                    </Product.Brand>
                                    <Product.Title>
                                        {remaining}
                                    </Product.Title>
                                    <Product.Price>
                                        ${value.price}
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
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <CartItem.QuantitySizebox>
                                        <CartItem.Sizebox paddingX={"3px"} paddingY={"3px"}>+</CartItem.Sizebox>
                                        <span style={{margin: "auto"}}>1</span>
                                        <CartItem.Sizebox paddingX={"3px"} paddingY={"3px"}>M</CartItem.Sizebox>
                                    </CartItem.QuantitySizebox>
                                    <Product.Preview src={value.src} width={160}/>
                                </div>
                            </CartItem>
                        )
                    })
                }
            </>
        );
    }
}

export default Cart;
