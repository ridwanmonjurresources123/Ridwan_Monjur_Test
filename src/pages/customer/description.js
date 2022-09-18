import { Component } from 'react'
import ProductPreview from '../../components/product/ProductPreview'
import ProductDescription from '../../components/product/ProductDescription'
import { Description } from '../../components/product/styles'
import { withRouterHOC } from '../../utils/withRouterHOC'
import { fetchProducById } from '../../services/gqlApi'
import Navigation from '../../components/layouts/Navigation/Navigation'
import CartComponent from '../../components/product/CartComponent'
import Footer from '../../components/layouts/Footer'

class DescriptionPage extends Component {
    state = {
        description: null
    }

    componentDidMount() {
        let { productId } = this.props.router.params

        fetchProducById(productId).then((value) => {

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
                <Navigation/>
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
                <Footer/>
            </>
        )
    }
}

export default withRouterHOC(DescriptionPage)
