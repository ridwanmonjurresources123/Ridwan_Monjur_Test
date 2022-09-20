import { Component,  Fragment } from 'react'
import OverlayCartItemComponent from './OverlayCartItem'
import { connect } from 'react-redux'
import { OverlayCartItem } from './styles'
import { nanoid } from '@reduxjs/toolkit'
import { roundOffTwoDP } from '../../redux/cart/cart-utils'

class OverLayCart extends Component {
   
    render() {
        console.log({props: this.props})
        return (
            <>
                <OverlayCartItem.Container>
                    <OverlayCartItem.Heading>My bag</OverlayCartItem.Heading>
                    {
                        this.props.cart && this.props.cart.map((value, cartIndex) => {
                            return (
                                <Fragment key={`${nanoid()}`}>
                                    <OverlayCartItemComponent cart={{ ...value }} cartIndex={cartIndex} />
                                </Fragment>
                            )
                        })
                    }
                    <div style={{ margin: "5px", display: "flex", justifyContent: "space-around" }}>
                        {!this.props.totalQuantity ?
                            <h3>No items to display! </h3>
                            :
                            <>
                                <span>Total: </span>
                                <span>
                                    {roundOffTwoDP(
                                        Number(this.props.total[this.props.currentCurrency]) + Number(this.props.total[this.props.currentCurrency]) * this.props.tax)
                                    }
                                </span>
                            </>
                        }
                    </div>
                    <OverlayCartItem.ButtonContainer>
                        <OverlayCartItem.ButtonViewCart onClick={()=> this.props.routerDirectToCartPage()}>
                            View bag
                        </OverlayCartItem.ButtonViewCart>
                        <OverlayCartItem.ButtonCheckoutCart>
                            Check out
                        </OverlayCartItem.ButtonCheckoutCart>
                    </OverlayCartItem.ButtonContainer>
                </OverlayCartItem.Container>

            </>
        )
    }
}


function mapStateToProps(state) {
    return {
        cart: state.cartReducer.cart,
        totalQuantity: state.cartReducer.totalQuantity,
        total: state.cartReducer.total,
        tax: state.cartReducer.tax,
        currentCurrency: state.productReducer.currentCurrency.index
    }
}


export default connect(
    mapStateToProps,
)(OverLayCart)


