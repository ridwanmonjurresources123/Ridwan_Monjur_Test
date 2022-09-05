import { Component } from 'react';
import { withRouterHOC } from '../../utils/withRouterHOC';

class ProductDescription extends Component {
    constructor() {
        super()

        this.counter = 0
        
        this.card = {
            id: this.counter++, 
            src: "https://cdn.shopify.com/s/files/1/0071/6665/6579/products/RunningT-shirtIMG_0762_720x.png?v=1600684690",
            title: "Apollo Running Shirt",
            price: 45
        }
    }

    render() {
        return (
            <div>
                ProductDescription 
            </div>
        );
    }
}

export default withRouterHOC(ProductDescription);
