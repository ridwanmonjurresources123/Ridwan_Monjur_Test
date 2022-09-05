import { Component } from 'react';
import { withRouterHOC } from '../../utils/withRouterHOC';

class ProductListing extends Component {
    constructor() {
        super()

        // props undefined in constructor: console.log({props: this.props})
    }
    render() {
        // props defined here: console.log({props: this.props})

        return (
            <div>
            ProductListing {this.props.router.params.category}
            </div>
        );
    }
}

export default withRouterHOC(ProductListing);
