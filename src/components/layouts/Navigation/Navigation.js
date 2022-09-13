import { Component, createRef } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Dropdown } from './styles'

import CompanyLogo from '../../../images/company.png'
import CartComponent from '../../product/CartComponent'
import { connect } from 'react-redux'
import { withRouterHOC } from '../../../utils/withRouterHOC'
import DropdownIcon from './styles/DropdownIcon.styled'
import { changeCurrencyAction } from '../../../redux/products/products-action'

const initialState = {
    cartDropdown: true, currencyDropdown: true
}

class Navigation extends Component {
    state = {
        dropDownClose: {...initialState}
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
            let newDropDownClose = {...initialState}

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

    changeCurrency(currentCurrency){
        this.props.dispatchChangeCurrencyAction(currentCurrency)

        this.toggleDropDownState('currencyDropdown')
    }

    constructor() {
        super()

        this.myRef = createRef()

        this.toggleDropDownState = this.toggleDropDownState.bind(this)

        this.changeOpacity = this.changeOpacity.bind(this)
    }

    render() {
        // delete this

        return (
            <Nav ref={this.myRef} id='nav'>
                <div>
                    {
                        this.props.categories &&
                        this.props.categories.map((value) => {
                            return (
                                <Nav.Link active={value !== this.props.router.params} >
                                    <Link to={`category/${value.name}`}>
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
                        <Dropdown.MenuButton onClick={() => this.toggleDropDownState('cartDropdown')}>
                            <DropdownIcon>$
                                <DropdownIcon.Arrow>⌄</DropdownIcon.Arrow>
                            </DropdownIcon>
                        </Dropdown.MenuButton>
                        <Dropdown.ItemContainer isInvisible={this.state.dropDownClose['cartDropdown']}>
                            {
                                this.props.cart && this.props.cart.map((value) => {
                                    return (
                                        <CartComponent cart={{ ...value }} isOverlay={true} key={value.id} />
                                    )
                                })
                            }
                        </Dropdown.ItemContainer>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.MenuButton onClick={() => this.toggleDropDownState('currencyDropdown')}>
                            <DropdownIcon>🛒</DropdownIcon>
                        </Dropdown.MenuButton>
                        <Dropdown.ItemContainer isInvisible={this.state.dropDownClose['currencyDropdown']}>
                            {
                                this.props.currencies && this.props.currencies.map((value, index) => {
                                    return (
                                        <Dropdown.ItemDiv
                                        onClick={ () => this.changeCurrency({...value, index}) }

                                        >
                                            {value.symbol} {value.label}
                                        </Dropdown.ItemDiv>
                                    )
                                })
                            }

                        </Dropdown.ItemContainer>
                    </Dropdown>
                </div>
            </Nav>
        )
    }
}


function mapStateToProps(state) {
    return {
        currencies: state.productReducer.currencies,
        categories: state.productReducer.categories,
        cart: state.cartReducer.cart
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


