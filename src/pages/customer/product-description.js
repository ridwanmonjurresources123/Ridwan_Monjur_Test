import { Component } from 'react';
import { withRouterHOC } from '../../utils/withRouterHOC';

class ProductDescription extends Component {
    constructor() {
        super()

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
