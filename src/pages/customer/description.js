import { Component } from 'react';
import ProductPreview from '../../components/product/ProductPreview';
import ProductDescription from '../../components/product/ProductDescription';
import { Description } from '../../components/product/styles';
import { withRouterHOC } from '../../utils/withRouterHOC';

class DescriptionPage extends Component {
    constructor() {
        super()

        this.counter = 0

        this.description = {
            id: this.counter++,
            src: [
                'https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg',
                'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg'
            ],
            title: "Apollo Running Shirt",
            price: 45,
            description: "Find stunning women's cocktail dresses and party dresses. Stand out in lace" +
                "and metallic cocktail dresses and party dresses from all your favorite brands."
        }
    }

    render() {
        let { productId } = this.props.router.params
        
        let stringArray = this.description.title.split(" ")

        let [first, ...remaining] = stringArray

        remaining = remaining.join(" ")

        return (
            <div>
                <Description>
                    <ProductPreview  images={this.description.src}/>
                    <ProductDescription description={{...this.description, first, remaining}}  key={this.description.id}/>
                </Description>
            </div>
        );
    }
}

export default withRouterHOC(DescriptionPage);
