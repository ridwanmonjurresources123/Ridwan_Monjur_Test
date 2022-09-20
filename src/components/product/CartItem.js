import { Component, Fragment } from 'react'
import { CartItem, Product } from './styles'
import { connect } from 'react-redux'
import { editCartAttributeAction, incrementValueToCartAction } from '../../redux/cart/cart-action'
import CartImagePreviewTab from './CartImagePreviewTab'

class CartItemComponent extends Component {
    editForm({ attribute, index, id, value }) {
        this.props.dispatchAddProductToCartAction({ attribute, index, id, value })
    }

    render() {

        let { cart, currentCurrency, cartIndex } = this.props
        return (

            <CartItem >
                <div>
                    <Product.Brand>
                        {cart.brand}
                    </Product.Brand>
                    <Product.Title>
                        {cart.name}
                    </Product.Title>
                    <Product.Price>
                        {currentCurrency.symbol} {cart.prices[currentCurrency.index].amount}
                    </Product.Price>
                    <br />
                    {
                        cart.attributes.map((attribute, attributeIndex) => {
                            return (
                                <Fragment key={`cart${attribute.name}${attributeIndex}`}>
                                    <Product.Subtitle >
                                        {attribute.name}
                                    </Product.Subtitle>
                                    {
                                        attribute.name.toLowerCase() !== 'color'
                                            ?
                                            attribute.items.map((attributeItem) => {
                                                return (
                                                    <CartItem.Sizebox
                                                        onClick={() => this.editForm({
                                                            attribute: attribute.name,
                                                            index: cartIndex, id: attributeItem.id, value: attributeItem.value
                                                        })}
                                                        key={`cart${attributeItem.id}`}
                                                        active={attributeItem.id === cart.selectedAttributes[attribute.name]?.id}
                                                        paddingX={"3px"}
                                                        paddingY={"6px"}>
                                                        {attributeItem.displayValue}
                                                    </CartItem.Sizebox>
                                                )
                                            })
                                            :
                                            attribute.items.map((attributeItem) => {
                                                return (
                                                    <CartItem.Colorbox
                                                        active={attributeItem.id === cart.selectedAttributes[attribute.name]?.id}
                                                        onClick={() => this.editForm({
                                                            attribute: attribute.name,
                                                            index: cartIndex, id: attributeItem.id, value: attributeItem.value
                                                        })}
                                                        key={`cart${attributeItem.id}`}
                                                        backgroundColor={attributeItem.displayValue}
                                                    />
                                                )
                                            })
                                    }
                                </Fragment>)
                        })
                    }

                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CartItem.QuantitySizebox>
                        <CartItem.Sizebox onClick={() => this.props.dispatchIncrementValueToCartAction({ index: cartIndex, incrementQuantity: 1 })} paddingX={"3px"} paddingY={"3px"}>+</CartItem.Sizebox>
                        <span style={{ margin: "auto" }}>{cart.quantity}</span>
                        <CartItem.Sizebox onClick={() => this.props.dispatchIncrementValueToCartAction({ index: cartIndex, incrementQuantity: -1 })} paddingX={"3px"} paddingY={"3px"}>-</CartItem.Sizebox>
                    </CartItem.QuantitySizebox>
                    <CartImagePreviewTab images={cart.gallery} />

                </div>
            </CartItem>

        )
    }
}


function mapStateToProps(state) {
    return {
        currentCurrency: state.productReducer.currentCurrency,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchAddProductToCartAction: (newAttribute) => dispatch(editCartAttributeAction(newAttribute)),
        dispatchIncrementValueToCartAction: (change) => dispatch(incrementValueToCartAction(change)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartItemComponent)