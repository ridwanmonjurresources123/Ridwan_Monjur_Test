import { Component, createRef, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Dropdown } from './styles'
import CompanyLogo from '../../../images/company.png'
import OverlayCartComponent from '../../product/OverlayCartItem'
import { connect } from 'react-redux'
import { withRouterHOC } from '../../../utils/withRouterHOC'
import DropdownIcon from './styles/DropdownIcon.styled'
import { changeCurrencyAction } from '../../../redux/products/products-action'
import { OverlayCartItem } from '../../product/styles'
import { nanoid } from '@reduxjs/toolkit'
import { roundOffTwoDP } from '../../../redux/cart/cart-utils'

const initialState = {
    cartDropdown: true, currencyDropdown: true
}

class Navigation extends Component {
    state = {
        dropDownClose: { ...initialState }
    }

    changeOpacity(opacity) {
        let currentElement = document.querySelector('#nav')

        while (currentElement !== null) {

            let sibling = currentElement.nextElementSibling

            currentElement = sibling

            if (sibling) sibling.style.opacity = opacity
        }
    }

    toggleDropDownState(key) {
        this.setState(prevState => {
            let newDropDownClose = { ...initialState }

            newDropDownClose[key] = !prevState.dropDownClose[key]

            let currentStyle = this.myRef.current.style

            if ((newDropDownClose[key] === false)) {
                this.changeOpacity(0.3)

                currentStyle.zIndex = "999"
            }
            else {
                this.changeOpacity(1)

                currentStyle.zIndex = "1"

            }

            return {
                ...prevState,
                dropDownClose: newDropDownClose
            }
        })
    }

    changeCurrency(currentCurrency) {
        this.props.dispatchChangeCurrencyAction(currentCurrency)

        this.toggleDropDownState('currencyDropdown')
    }

    constructor() {
        super()

        this.myRef = createRef()

        this.toggleDropDownState = this.toggleDropDownState.bind(this)

        this.changeOpacity = this.changeOpacity.bind(this)
    }

    routerDirectToCartPage() {
        this.props.router.navigate("../cart")
    }

    render() {
        // delete this
        let { router } = this.props

        return (
            <Nav ref={this.myRef} id='nav'>
                <div>
                    {
                        this.props.categories &&
                        this.props.categories.map((value, index) => {
                            return (
                                <Nav.Link
                                    active={this.props.router.params?.category == value.name}
                                    key={`${index} ${value.name}`}>
                                    <Link to={`../category/${value.name}`} replace>
                                        {value.name}
                                    </Link>
                                </Nav.Link>
                            )
                        })

                    }
                </div>
                <div>
                    <Nav.Icon src={CompanyLogo} />
                </div>
                <div>
                    <Dropdown>
                        <Dropdown.MenuButton onClick={() => this.toggleDropDownState('currencyDropdown')}>
                            <DropdownIcon>$
                                <DropdownIcon.Arrow>⌄</DropdownIcon.Arrow></DropdownIcon>
                        </Dropdown.MenuButton>
                        <Dropdown.ItemContainer isInvisible={this.state.dropDownClose['currencyDropdown']}>
                            {
                                this.props.currencies && this.props.currencies.map((value, index) => {
                                    return (
                                        <Dropdown.ItemDiv
                                            onClick={() => this.changeCurrency({ ...value, index })}
                                            key={`${nanoid()}`
                                            }
                                        >
                                            <span> {value.symbol} {value.label} </span>
                                        </Dropdown.ItemDiv>
                                    )
                                })}
                        </Dropdown.ItemContainer>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.MenuButton onClick={() => this.toggleDropDownState('cartDropdown')}>
                            <DropdownIcon>
                                🛒
                                <DropdownIcon.Badge>
                                    {this.props.totalQuantity}
                                </DropdownIcon.Badge>
                            </DropdownIcon>
                        </Dropdown.MenuButton>
                        <Dropdown.ItemContainer isInvisible={this.state.dropDownClose['cartDropdown']}>
                            <OverlayCartItem.Container>
                                <OverlayCartItem.Heading>My bag</OverlayCartItem.Heading>
                                {
                                    this.props.cart && this.props.cart.map((value, cartIndex) => {
                                        return (
                                            <Fragment key={`${nanoid()}`}>
                                                <OverlayCartComponent cart={{ ...value }} cartIndex={cartIndex} />
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
                                    <OverlayCartItem.ButtonViewCart onClick={() => this.routerDirectToCartPage()}>
                                        View bag
                                    </OverlayCartItem.ButtonViewCart>
                                    <OverlayCartItem.ButtonCheckoutCart>
                                        Check out
                                    </OverlayCartItem.ButtonCheckoutCart>
                                </OverlayCartItem.ButtonContainer>
                            </OverlayCartItem.Container>
                        </Dropdown.ItemContainer>
                    </Dropdown>
                </div>
            </Nav >
        )
    }
}


function mapStateToProps(state) {
    return {
        currencies: state.productReducer.currencies,
        categories: state.productReducer.categories,
        cart: state.cartReducer.cart,
        totalQuantity: state.cartReducer.totalQuantity,
        total: state.cartReducer.total,
        tax: state.cartReducer.tax,
        currentCurrency: state.productReducer.currentCurrency.index
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchChangeCurrencyAction: (currentCurrency) => dispatch(changeCurrencyAction(currentCurrency)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouterHOC(Navigation))


