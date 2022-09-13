import { Component } from 'react'
import { connect } from 'react-redux'
import CartComponent from '../../components/product/CartComponent'

class CartPage extends Component {

    render() {
        let isOverlay = false

        return (
            <main>
                {
                    this.props.cart && this.props.cart.map((value) => {
                        return (
                            <CartComponent cart={{ ...value, isOverlay }} key={value.id} />
                        )
                    })
                }
            </main >
        )
    }
}

function mapStateToProps(state) {
    return { cart: state.cartReducer.cart }
}

export default connect(
    mapStateToProps
)(CartPage)

