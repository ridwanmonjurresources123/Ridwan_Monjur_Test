import { Component } from 'react'
import { withRouterHOC } from '../../utils/withRouterHOC'
import Navigation from '../../components/layouts/Navigation/Navigation'
import Footer from '../../components/layouts/Footer'
import CardList from '../../components/product/CardList'

class ListingPage extends Component {

    render() {
        // props defined here but not in constructor: console.log({props: this.props})
        let { category } = this.props.router.params

        let categoryInUpperCase = category.charAt(0).toUpperCase() + category.slice(1)

        return (
            <>
                <Navigation />
                <main>
                    <h3> {categoryInUpperCase} </h3>
                    <CardList category={category} />
                </main>
                <Footer />
            </>
        )
    }
}

export default withRouterHOC(ListingPage)
