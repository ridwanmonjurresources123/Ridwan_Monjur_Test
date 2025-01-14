import { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../../components/layouts/Footer'
import Navigation from '../../components/layouts/Navigation/Navigation'
import CartList from '../../components/product/CartList'
import { roundOffTwoDP } from '../../redux/cart/cart-utils'

class CartPage extends Component {

    render() {
        return (
            <>
                <Navigation />
                <main>
                    <CartList />
                    {
                        this.props.totalQuantity!==0 && 
                        <div style={{ margin: "0 20px", fontSize: "18px" }}>
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
        total: state.cartReducer.total,
        totalQuantity: state.cartReducer.totalQuantity,
        tax: state.cartReducer.tax
    }
}

export default connect(
    mapStateToProps
)(CartPage)

