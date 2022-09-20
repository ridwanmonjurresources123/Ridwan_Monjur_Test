import { Component } from 'react'
import { Description } from './styles'


class ProductPreview extends Component {
    state = {
        currentImage: null
    }

    constructor() {
        super()

        this.changeCurrentImage = this.changeCurrentImage.bind(this)
    }

    changeCurrentImage = (index) => {
        this.setState({
            currentImage: this.props.images[index]
        })
    }

    render() {

        let { images } = this.props

        return (
            <>
                <Description.ControlPreview>
                    {images.map((value, index) => {
                        return <img src={value} key={`${value}${index}`} onClick={() => this.changeCurrentImage(index)} />
                    })}
                </Description.ControlPreview>
                <Description.Preview>
                    {
                        this.state.currentImage === null ?
                            <img src={this.props.images[0]} />
                            :
                            <img src={this.state.currentImage} />
                    }
                </Description.Preview>
            </>
        )
    }
}

export default ProductPreview
