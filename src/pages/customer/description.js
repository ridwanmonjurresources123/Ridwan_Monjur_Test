import { Component } from 'react'
import ProductPreview from '../../components/product/ProductPreview'
import ProductDescription from '../../components/product/ProductDescription'
import { Description } from '../../components/product/styles'
import { withRouterHOC } from '../../utils/withRouterHOC'
import { fetchProducById } from '../../services/gqlApi'

class DescriptionPage extends Component {
    state = {
        description: null
    }

    componentDidMount() {
        let { productId } = this.props.router.params

        fetchProducById(productId).then((value) => {
            console.log({ productId, value: value.product })
            this.setState({ description: value.product })
        })
        /* 
        attributes: Array(2) [ 
            {name: 'Color', items: Array(5)}
            {name: "Capacity", }]
        brand: "Microsoft"
        category: "tech"
        description: "...." 
        gallery: []
        inStock: false
        name
        prices: {anount, currency: label, symbol}
        */
    }

    render() {
        return (
            <>
                {
                    this.state.description ?
                        <main>
                            <Description>
                                <ProductPreview images={this.state.description.gallery} />
                                <ProductDescription description={{ ...this.state.description }}  />
                            </Description>
                        </main>
                    :
                    <main>Loading</main>
                }
            </>
        )
    }
}

export default withRouterHOC(DescriptionPage)
