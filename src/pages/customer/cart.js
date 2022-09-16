import { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../../components/layouts/Footer/Footer'
import Navigation from '../../components/layouts/Navigation/Navigation'
import CartComponent from '../../components/product/CartComponent'

class CartPage extends Component {

    render() {
        let isOverlay = false

        return (
            <>
            <Navigation/>
            <main>
                {
                    this.props.cart && this.props.cart.map((value, cartIndex) => {
                        return (
                            <CartComponent cart={{ ...value, isOverlay }} cartIndex={cartIndex} key={ `${value.name}${cartIndex}`} />
                        )
                    })
                }
            </main >
            <Footer />
            </>
        )
    }
}

function mapStateToProps(state) {
    return { cart: state.cartReducer.cart }
}

export default connect(
    mapStateToProps
)(CartPage)

