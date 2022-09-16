import { Component, Fragment } from 'react'
import { CartItem, Product } from './styles'
import { connect } from 'react-redux'
import { decrementValueToCartAction, editCartAttributeAction, incrementValueToCartAction } from '../../redux/cart/cart-action'

class CartComponent extends Component {
    constructor() {
        super()
    }

    editForm({attribute, index, id, value }) {
        this.props.dispatchAddProductToCartAction({attribute, index,  id, value })
    }

    render() {

        let { cart, isOverlay, currentCurrency, cartIndex } = this.props
        console.log({ cart })
        return (

            <CartItem isOverlay={isOverlay}>
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
                    {!isOverlay && <br />}
                    {
                        cart.attributes.map((attribute, attributeIndex) => {
                            return (
                                <Fragment key={`cart${attribute.name}${attributeIndex}`}>
                                    <Product.Subtitle isOverlay={true}>
                                        {attribute.name}
                                    </Product.Subtitle>
                                    {
                                        attribute.name.toLowerCase() !== 'color'
                                            ?
                                            attribute.items.map((attributeItem) => {
                                                return (
                                                    <CartItem.Sizebox
                                                    onClick={() => this.editForm({attribute: attribute.name,
                                                        index: cartIndex, id: attributeItem.id, value: attributeItem.value })}
                                                        key={`cart${attributeItem.id}`}
                                                        active={attributeItem.id === cart.selectedAttributes[attribute.name]?.id}
                                                        paddingX={"3px"}
                                                        isOverlay={true}
                                                        paddingY={"6px"}>
                                                        {attributeItem.displayValue}
                                                    </CartItem.Sizebox>
                                                )
                                            })
                                            :
                                            attribute.items.map((attributeItem) => {
                                                return (
                                                    <CartItem.Colorbox
                                                        isOverlay={true}
                                                        active={attributeItem.id === attribute.selectedAttributes[attribute.name]?.id}
                                                        onClick={() => this.editForm({attribute: attribute.name,
                                                            index: cartIndex, id: attributeItem.id, value: attributeItem.value })}
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
                    <CartItem.QuantitySizebox isOverlay={isOverlay}>
                        <CartItem.Sizebox  onClick={()=> this.props.dispatchIncrementValueToCartAction({index: cartIndex, amount: 1})} isOverlay={isOverlay} paddingX={"3px"} paddingY={"3px"}>+</CartItem.Sizebox>
                        <span style={{ margin: "auto" }}>{cart.quantity}</span>
                        <CartItem.Sizebox  onClick={()=> this.props.dispatchDecrementValueToCartAction({index: cartIndex, amount: 1})} isOverlay={isOverlay} paddingX={"3px"} paddingY={"3px"}>-</CartItem.Sizebox>
                    </CartItem.QuantitySizebox>
                    <CartItem.Preview isOverlay={isOverlay} src={cart.gallery[0]} />
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
        dispatchIncrementValueToCartAction: (change)=> dispatch(incrementValueToCartAction(change)), 
        dispatchDecrementValueToCartAction: (change)=> dispatch(decrementValueToCartAction(change)) 
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartComponent)