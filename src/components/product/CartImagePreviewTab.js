import { Component, Fragment } from 'react'
import { CartItem } from './styles'

const buttonStates = { FORWARD: 1, BACKWARD: -1 }

class CartImagePreviewTab extends Component {
    state = { currentImageIndex: 0 }

    changeImage(changeState) {
        let index = this.state.currentImageIndex + changeState
        
        let newChange = this.props.images[index]
        
        if (newChange!==undefined) this.setState({ currentImageIndex: index })
        
        else {}
    }

    constructor() {
        super()
    }

    render() {

        return (
            <>
                <CartItem.PreviewTabContainer>
                    {
                        this.props.images && this.props.images.map((value, index) => {
                            return (
                                <CartItem.PreviewImg
                                    hidden={this.state.currentImageIndex !== index}
                                    src={value}
                                    key={`${value}${index}`} />
                            )
                        })
                    }
                    <CartItem.PreviewTabControllerLeft onClick={() => this.changeImage(buttonStates.BACKWARD)} >
                        {"<"}
                    </CartItem.PreviewTabControllerLeft>
                    <CartItem.PreviewTabControllerRight onClick={() => this.changeImage(buttonStates.FORWARD)} >
                        {">"}
                    </CartItem.PreviewTabControllerRight>
                </CartItem.PreviewTabContainer>

                {/* <CartItem.Warning>
                    This item has only one item or you can't go backward/ forward.
                </CartItem.Warning> */}
            </>
        )
    }
}

export default CartImagePreviewTab