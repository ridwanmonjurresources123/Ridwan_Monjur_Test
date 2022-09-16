import { Component } from 'react'
import CardComponent from '../../components/product/CardComponent'
import { GridCart } from '../../components/product/styles'
import { fetchAllProductsByCategory } from '../../services/gqlApi'
import { withRouterHOC } from '../../utils/withRouterHOC'
import Navigation from '../../components/layouts/Navigation/Navigation'
import CartComponent from '../../components/product/CartComponent'
import Footer from '../../components/layouts/Footer/Footer'

class ListingPage extends Component {
    state = {
        items: [],
        loading: false,
        error: ""
    }

    fetchComponentData(category) {
        fetchAllProductsByCategory(category).then((value) => {
            this.setState({
                items: value.category.products,
                loading: false,
                error: ""
            })
        })
    }

    componentDidMount() {
        let { category } = this.props.router.params

        this.setState((prev) => {
            return { ...prev, loading: true }
        })

        this.fetchComponentData(category)

    }

    componentDidUpdate(prevProps) {
        let { category } = this.props.router.params

        if (category !== prevProps.router.params.category) {
            // ... write code to get new data using new prop, also update your state
            this.fetchComponentData(category)

        }
    }

    render() {
        // props defined here but not in constructor: console.log({props: this.props})
        let { category } = this.props.router.params

        category = category.charAt(0).toUpperCase() + category.slice(1)

        return (
            <>
                <Navigation />
                <main>
                    <h3> {category} </h3>
                    <GridCart>
                        {
                            this.state.items && this.state.items.map((value) =>
                                <CardComponent cardValue={value} key={`${value.id}${this.props.router.params?.category}`} />
                            )
                        }
                    </GridCart>
                </main>
                <Footer />
            </>
        )
    }
}

export default withRouterHOC(ListingPage)
