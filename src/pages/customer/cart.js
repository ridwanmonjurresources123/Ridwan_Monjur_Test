import { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../../components/layouts/Footer'
import Navigation from '../../components/layouts/Navigation/Navigation'
import CartComponent from '../../components/product/CartComponent'
import { roundOffTwoDP } from '../../redux/cart/cart-utils'

class CartPage extends Component {

    render() {
        let isOverlay = false

        return (
            <>
                <Navigation />
                <main>
                    {
                        this.props.cart && this.props.cart.map((value, cartIndex) => {
                            return (
                                <CartComponent cart={{ ...value, isOverlay }} cartIndex={cartIndex} key={`${value.name}${cartIndex}`} />
                            )
                        })
                    }
                    {
                        this.props.totalQuantity!==0 && 
                        <div style={{ margin: "0 20px", fontSize: "15px" }}>
                            <p>Tax 21%: &nbsp; {roundOffTwoDP(Number(this.props.total[this.props.currentCurrency]) * this.props.tax)}</p>
                            <p>Quantity: &nbsp;{this.props.totalQuantity}</p>
                            <p>Total: &nbsp;
                                {
                                    roundOffTwoDP(Number(this.props.total[this.props.currentCurrency]) + Number(this.props.total[this.props.currentCurrency]) * this.props.tax)
                                }
                            </p>
                        </div>
                    }
                </main >
                <Footer />
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCurrency: state.productReducer.currentCurrency.index,
        cart: state.cartReducer.cart,
        total: state.cartReducer.total,
        totalQuantity: state.cartReducer.totalQuantity,
        tax: state.cartReducer.tax
    }
}

export default connect(
    mapStateToProps
)(CartPage)

