import { Component } from 'react';
import Cart from '../../components/product/Cart';

class ProductCart extends Component {
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
        return (
            <div>
                <h3>Cart</h3>
                <Cart productArray={this.productArray}/>
            </div>
        );
    }
}

export default ProductCart;
