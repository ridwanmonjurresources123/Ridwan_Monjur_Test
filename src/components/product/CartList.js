import { nanoid } from '@reduxjs/toolkit'
import { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'

class CartPage extends Component {

    render() {
        return (
            <>
                {
                    this.props.cart?.length > 0 ? this.props.cart.map((value, cartIndex) => {
                        return (
                            <CartItem cart={{ ...value }} cartIndex={cartIndex} key={nanoid()} />
                        )
                    })
                        :
                        <div>
                            List is empty
                        </div>
                }
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer.cart,
    }
}

export default connect(
    mapStateToProps
)(CartPage)

