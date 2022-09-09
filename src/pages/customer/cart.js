import { Component } from 'react';
import CartComponent from '../../components/product/CartComponent';

class CartPage extends Component {
    constructor() {
        super()

        this.counter = 0

        this.productArray = Array(5).fill({
            id: this.counter++,
            src: "https://cdn.shopify.com/s/files/1/0071/6665/6579/products/RunningT-shirtIMG_0762_720x.png?v=1600684690",
            title: "Apollo Running Shirt",
            price: 45
        })
        // props undefined in constructor: console.log({props: this.props})

    }
    render() {
        let isOverlay = false

        return (
            <main>
                {
                    this.productArray && this.productArray.map((value) => {
                        let stringArray = value.title.split(" ")

                        let [first, ...remaining] = stringArray

                        remaining = remaining.join(" ")

                        return (
                            <CartComponent cart={{...value, first, remaining, isOverlay}}  key={value.id}/>
                        )
                    })
                }
            </main >
        );
    }
}

export default CartPage;
