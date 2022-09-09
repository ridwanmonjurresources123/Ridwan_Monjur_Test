import { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Dropdown } from './styles';

import CompanyLogo from '../../../images/company.png'
import CartComponent from '../../product/CartComponent';

class Navigation extends Component {
    state = {
        active: true,
        dropDownClose: [true, true]
    }

    changeOpacity(opacity) {
        let currentElement = document.querySelector('#nav')

        while (currentElement !== null) {

            let sibling = currentElement.nextElementSibling

            currentElement = sibling

            if (sibling) sibling.style.opacity = opacity

            console.log({ sibling })
        }
    }

    toggleDropDownState(index) {
        console.log({ index, state: this.state })

        console.log({ ref: this.myRef.current })

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

        this.myRef = createRef();

        this.toggleDropDownState = this.toggleDropDownState.bind(this)

        this.changeOpacity = this.changeOpacity.bind(this)

        // delete this
        this.productArray = Array(5).fill({
            id: this.counter++,
            src: "https://cdn.shopify.com/s/files/1/0071/6665/6579/products/RunningT-shirtIMG_0762_720x.png?v=1600684690",
            title: "Apollo Running Shirt",
            price: 45
        })
    }

    render() {
        // delete this

        return (
            <Nav ref={this.myRef} id='nav'>
                <div >
                    <Nav.Link active={this.active} >
                        <Link to='category/women'>
                            Women
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to='category/men'>
                            Men
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to='category/kids'>
                            Kids
                        </Link>
                    </Nav.Link>
                </div>
                <div>
                    <Nav.Icon src={CompanyLogo} />
                </div>
                <div>
                    <Dropdown>
                        <Dropdown.Button onClick={() => this.toggleDropDownState(0)}>This is menu 1</Dropdown.Button>
                        <Dropdown.Items isInvisible={this.state.dropDownClose[0]}>
                            {
                                this.productArray && this.productArray.map((value) => {
                                    let stringArray = value.title.split(" ")

                                    let [first, ...remaining] = stringArray

                                    remaining = remaining.join(" ")

                                    return (
                                        <CartComponent cart={{ ...value, first, remaining }} isOverlay= {true} key={value.id} />
                                    )
                                })
                            }
                        </Dropdown.Items>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Button onClick={() => this.toggleDropDownState(1)}>This is menu 2</Dropdown.Button>
                        <Dropdown.Items isInvisible={this.state.dropDownClose[1]}>
                            <p>This is child 1 of parent 2</p>
                            <p>This is child 2 of parent 2</p>
                        </Dropdown.Items>
                    </Dropdown>
                </div>
            </Nav>
        );
    }
}

export default Navigation;
