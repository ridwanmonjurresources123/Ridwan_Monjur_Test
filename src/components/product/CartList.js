import { nanoid } from '@reduxjs/toolkit'
import { Component } from 'react'
import { connect } from 'react-redux'
import EmptyNotification from '../notification/empty'
import CartItem from './CartItem'

class CartPage extends Component {

    render() {
        return (
            <>
                {
                    this.props.cart[0] ?
                        this.props.cart.map((value, cartIndex) => {
                            return (
                                <CartItem cart={{ ...value }} cartIndex={cartIndex} key={nanoid()} />
                            )
                        })
                        :
                        <EmptyNotification message="The cart is empty..."/>
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

