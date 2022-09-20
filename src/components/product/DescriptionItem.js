import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { addProductToCartAction } from '../../redux/cart/cart-action'
import { CartItem, Description, Product } from './styles'

const initialState = { attributes: {}, missingAttributes: [], quantity: 1 }

class ProductDescription extends Component {
    state = { ...initialState }


    addForm(attribute, { id, value }) {
        this.setState((prev) => {
            return { attributes: { ...prev.attributes, [attribute]: { id, value } } }
        })
    }

    submitForm(event) {
        event.preventDefault()

        let currentAtttributes = Object.keys(this.state.attributes)

        let missingAttributes = []

        let isEmptyForm = currentAtttributes.length === 0 && this.props.description.attributes.length !== 0

        let isExistAllAttributes = true && !isEmptyForm

        if (isEmptyForm)
            missingAttributes = this.props.description.attributes.map((attribute) => attribute.name)

        else {
            this.props.description.attributes.forEach((attribute) => {

                let isExist = currentAtttributes.includes(attribute.name)

                if (!isExist) {
                    missingAttributes.push(attribute.name)

                    isExistAllAttributes = false
                }
            })
        }
        if (isExistAllAttributes) {
            this.props.dispatchAddProductToCartAction({
                ...this.props.description, selectedAttributes: { ...this.state.attributes }, quantity: this.state.quantity
            })

            this.setState({ ...initialState })
        }

        else this.setState((prev) => { return { ...prev, missingAttributes } })
    }

    render() {

        let { description, currentCurrency } = this.props
        
        return (
            <>
                <Description.Text>
                    <Product.Brand fontSize={"35px"}>
                        {description.brand}
                    </Product.Brand>
                    <Product.Title fontSize={"25px"}>
                        {description.name}
                    </Product.Title>
                    <br />

                    {
                        description.attributes.map((attribute, index) => {
                            return (
                                <Fragment key={`${attribute.name}${index}`}>
                                    <Product.Subtitle>
                                        {attribute.name}
                                    </Product.Subtitle>
                                    {
                                        attribute.name.toLowerCase() !== 'color'
                                            ?
                                            attribute.items.map((attributeItem) => {
                                                return (
                                                    <CartItem.Sizebox
                                                        onClick={() => this.addForm(attribute.name,
                                                            { id: attributeItem.id, value: attributeItem.value })}
                                                        key={attributeItem.id}
                                                        active={attributeItem.id === this.state.attributes[attribute.name]?.id}
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
                                                        active={attributeItem.id === this.state.attributes[attribute.name]?.id}
                                                        onClick={() => this.addForm(attribute.name,
                                                            { id: attributeItem.id, value: attributeItem.value })}
                                                        key={attributeItem.id}
                                                        backgroundColor={attributeItem.displayValue} />
                                                )
                                            })
                                    }
                                </Fragment>)
                        })
                    }

                    <Product.Subtitle>
                        Price
                    </Product.Subtitle>
                    <Product.Price>
                        {currentCurrency.symbol} {description.prices[currentCurrency.index].amount}
                    </Product.Price>
                    {this.state.missingAttributes.length > 0
                        && <Description.AddToCartError>You have not selected the following attributes:
                            {this.state.missingAttributes.map((value, index) =>
                                <Fragment key={`${index}${value}`}> {index + 1}. {value}
                                </Fragment>)}
                        </Description.AddToCartError>
                    }
                    <Description.AddToCart onClick={(event) => this.submitForm(event)}> Submit </Description.AddToCart>

                </Description.Text>

            </>
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
        dispatchAddProductToCartAction: (cart) => dispatch(addProductToCartAction(cart)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDescription)
