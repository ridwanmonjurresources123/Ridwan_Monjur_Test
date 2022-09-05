import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Nav, Nav__Link, Nav__Icon, Dropdown__Menu, Dropdown__Button, Dropdown__Items } from './Navigation.styled';
import CompanyLogo from '../../../images/company.png'

class Navigation extends Component {
    state = {
        active: true,
        dropDownClose: [true, true]
    }

    toggleDropDownState(index) {
        console.log({ index, state: this.state })

        this.setState(prevState => {
            let newDropDownClose = Array(2).fill(true)

            newDropDownClose[index] = !prevState.dropDownClose[index]

            return {
                ...prevState,
                dropDownClose: newDropDownClose
            }
        })
    }

    constructor() {
        super()

        this.toggleDropDownState = this.toggleDropDownState.bind(this)
    }

    render() {
        return (
            <Nav>
                <div>
                    <Nav__Link active={this.active} >
                        <Link to='category/women'>
                            Women
                        </Link>
                    </Nav__Link>
                    <Nav__Link>
                        <Link to='category/men'>
                            Men
                        </Link>
                    </Nav__Link>
                    <Nav__Link>
                        <Link to='category/kids'>
                            Kids
                        </Link>
                    </Nav__Link>
                </div>
                <div>
                    <Nav__Icon src={CompanyLogo} />
                </div>
                <div>
                    <Dropdown__Menu>
                        <Dropdown__Button onClick={() => this.toggleDropDownState(0)}>This is menu 1</Dropdown__Button>
                        <Dropdown__Items isInvisible={this.state.dropDownClose[0]}>
                            <p>This is child 1 of parent 1</p>
                            <p>This is child 2 of parent 1</p>
                        </Dropdown__Items>
                    </Dropdown__Menu>

                    <Dropdown__Menu>
                        <Dropdown__Button onClick={() => this.toggleDropDownState(1)}>This is menu 2</Dropdown__Button>
                        <Dropdown__Items isInvisible={this.state.dropDownClose[1]}>
                            <p>This is child 1 of parent 2</p>
                            <p>This is child 2 of parent 2</p>
                        </Dropdown__Items>
                    </Dropdown__Menu>
                </div>
            </Nav>
        );
    }
}

export default Navigation;
