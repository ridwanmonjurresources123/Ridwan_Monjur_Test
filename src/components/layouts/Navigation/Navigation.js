import { Component } from 'react';
import { Link } from 'react-router-dom';
import {Nav, Dropdown}  from './styles';

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
                            <p>This is child 1 of parent 1</p>
                            <p>This is child 2 of parent 1</p>
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
