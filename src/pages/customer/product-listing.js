import { Component } from 'react';
import CardGrid from '../../components/product/CardGrid';
import { withRouterHOC } from '../../utils/withRouterHOC';

class ProductListing extends Component {
    constructor() {
        super()

        this.counter = 0
        
        this.cardArray = Array(20).fill({
            id: this.counter++, 
            src: "https://cdn.shopify.com/s/files/1/0071/6665/6579/products/RunningT-shirtIMG_0762_720x.png?v=1600684690",
            title: "Apollo Running Shirt",
            price: 45
        })
        // props undefined in constructor: console.log({props: this.props})
   
    }
    render() {
        // props defined here: console.log({props: this.props})

        return (
            <div>
                <h3>Category</h3>
                <CardGrid cardArray={this.cardArray}/>
                ProductListing {this.props.router.params.category}
            </div>
        );
    }
}

export default withRouterHOC(ProductListing);
