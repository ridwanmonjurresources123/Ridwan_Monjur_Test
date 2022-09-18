import { Component, Fragment } from 'react'
import { OverlayCartItem } from './styles'
import { connect } from 'react-redux'
import { editCartAttributeAction, incrementValueToCartAction } from '../../redux/cart/cart-action'

class OverlayCartComponent extends Component {
    constructor() {
        super()

    }

    editForm({ attribute, index, id, value }) {
        this.props.dispatchAddProductToCartAction({ attribute, index, id, value })
    }

    render() {
        let { cart, currentCurrency, cartIndex } = this.props
       
        return (
            <OverlayCartItem>
                <div>
                    <OverlayCartItem.Brand>
                        {cart.brand}
                    </OverlayCartItem.Brand>
                    <OverlayCartItem.Title>
                        {cart.name}
                    </OverlayCartItem.Title>
                    <OverlayCartItem.Price>
                        {currentCurrency.symbol} {cart.prices[currentCurrency.index].amount}
                    </OverlayCartItem.Price>
                    {
                        cart.attributes.map((attribute, attributeIndex) => {
                            return (
                                <Fragment key={`cart${attribute.name}${attributeIndex}`}>
                                    <OverlayCartItem.Subtitle>
                                        {attribute.name}
                                    </OverlayCartItem.Subtitle>
                                    {
                                        attribute.name.toLowerCase() !== 'color'
                                            ?
                                            attribute.items.map((attributeItem) => {
                                                return (
                                                    <OverlayCartItem.Sizebox
                                                        onClick={() => this.editForm({
                                                            attribute: attribute.name,
                                                            index: cartIndex, id: attributeItem.id, value: attributeItem.value
                                                        })}
                                                        key={`cart${attributeItem.id}`}
                                                        active={attributeItem.id === cart.selectedAttributes[attribute.name]?.id}
                                                        paddingX={"3px"}
                                                        paddingY={"6px"}
                                                    >
                                                        {attributeItem.displayValue}
                                                    </OverlayCartItem.Sizebox>
                                                )
                                            })
                                            :
                                            attribute.items.map((attributeItem) => {

                                                return (
                                                    <OverlayCartItem.Colorbox
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
                    <OverlayCartItem.QuantitySizebox>
                        <OverlayCartItem.Sizebox
                            onClick={() => this.props.dispatchIncrementValueToCartAction({ index: cartIndex, incrementQuantity: 1 })}
                            paddingX={"3px"}
                            paddingY={"3px"}>
                                +
                        </OverlayCartItem.Sizebox>
                        <span style={{ margin: "auto" }}>{cart.quantity}</span>
                        <OverlayCartItem.Sizebox
                            onClick={() => this.props.dispatchIncrementValueToCartAction({ index: cartIndex, incrementQuantity: -1 })}
                            paddingX={"3px"}
                            paddingY={"3px"}>
                                -
                        </OverlayCartItem.Sizebox>
                    </OverlayCartItem.QuantitySizebox>
                    <OverlayCartItem.PreviewImg src={cart.gallery[0]} />
                </div>
            </OverlayCartItem>

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
)(OverlayCartComponent)