import { Component, createRef } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Dropdown } from './styles'

import CompanyLogo from '../../../images/company.png'
import CartComponent from '../../product/CartComponent'
import { connect } from 'react-redux'
import { withRouterHOC } from '../../../utils/withRouterHOC'

class Navigation extends Component {
    state = {
        dropDownClose: [true, true]
    }

    changeOpacity(opacity) {
        let currentElement = document.querySelector('#nav')

        while (currentElement !== null) {

            let sibling = currentElement.nextElementSibling

            currentElement = sibling

            if (sibling) sibling.style.opacity = opacity

        }
    }

    toggleDropDownState(index) {
        this.setState(prevState => {
            let newDropDownClose = Array(2).fill(true)

            newDropDownClose[index] = !prevState.dropDownClose[index]

            let currentStyle = this.myRef.current.style

            if ((newDropDownClose[0] === false)) {
                this.changeOpacity(0.3)

                currentStyle.zIndex = "999"
            }
            else {
                this.changeOpacity(1)
            }

            return {
                ...prevState,
                dropDownClose: newDropDownClose
            }
        })
    }



    constructor() {
        super()

        this.myRef = createRef()

        this.toggleDropDownState = this.toggleDropDownState.bind(this)

        this.changeOpacity = this.changeOpacity.bind(this)

    }

    render() {
        // delete this
        console.log({ Navigation: this.props })

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
                        <Dropdown.MenuButton onClick={() => this.toggleDropDownState(0)}>Cart</Dropdown.MenuButton>
                        <Dropdown.ItemContainer isInvisible={this.state.dropDownClose[0]}>
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
                        <Dropdown.MenuButton onClick={() => this.toggleDropDownState(1)}>This is menu 2</Dropdown.MenuButton>

                        <Dropdown.ItemContainer isInvisible={this.state.dropDownClose[1]}>
                            {
                                this.props.currencies && this.props.currencies.map((value) => {
                                    return (
                                        <Dropdown.ItemDiv> {value.symbol} {value.label} </Dropdown.ItemDiv>
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

export default connect(
    mapStateToProps
)(withRouterHOC(Navigation))


