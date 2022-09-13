import { Component } from 'react'
import CardComponent from '../../components/product/CardComponent'
import { GridCart } from '../../components/product/styles'
import { fetchAllProductsByCategory } from '../../services/gqlApi'
import { withRouterHOC } from '../../utils/withRouterHOC'

class ListingPage extends Component {
    state= {
        items: [],
        loading: false,
        error: ""
    }
    componentDidMount() {

        let { category } = this.props.router.params

        this.setState((prev)=>{
            return {...prev, loading: true}
        })

        fetchAllProductsByCategory(category).then((value) => {
            this.setState({ items: value.category.products,
                loading: false,
                error: ""})
        })


    }

    render() {
        // props defined here but not in constructor: console.log({props: this.props})
        let { category } = this.props.router.params

        category = category.charAt(0).toUpperCase() + category.slice(1)

        return (
            <main>
                <h3> {category} </h3>
                <GridCart>
                
                    {
                        this.state.items && this.state.items.map((value) =>
                            <CardComponent cardValue={value} key={value.id} />
                        )
                    }
                </GridCart>

            </main>
        )
    }
}

export default withRouterHOC(ListingPage)
