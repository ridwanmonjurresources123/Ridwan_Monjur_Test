import { Component } from 'react'
import ProductPreview from '../../components/product/DescriptionImagePreviewTab'
import ProductDescription from '../../components/product/DescriptionItem'
import { Description } from '../../components/product/styles'
import { withRouterHOC } from '../../utils/withRouterHOC'
import { catchError, fetchProducById } from '../../services/gqlApi'
import Navigation from '../../components/layouts/Navigation/Navigation'
import Footer from '../../components/layouts/Footer'
import ErrorNotification from '../../components/notification/error'
import Loading from '../../components/notification/loading'

class DescriptionPage extends Component {
    state = {
        data: null,
        isLoading: false,
        isError: false
    }

    async componentDidMount() {
        let { productId } = this.props.router.params

        this.setState((prev) => { return { ...prev, isLoading: true } })

        let { data, error } = await catchError(
            fetchProducById(productId)
                .then((data) => {
                    return data.product
                })
        )

        this.setState({
            data,
            isLoading: false,
            isError: error
        })
    }

    render() {
        console.log({ data: this.state })
        return (
            <>
                <Navigation currentCategory={this.state.data?.category}  />
                <main>
                    {
                        this.state.data &&
                        <Description>
                            <ProductPreview images={this.state.data?.gallery} />
                            <ProductDescription description={{ ...this.state.data }} />
                        </Description>
                    }
                    {
                        this.state.isError &&
                        <>
                            <div><ErrorNotification message="Could not fetch data..."/></div>
                        </>
                    }
                    {
                        this.state.isLoading &&
                        <>
                            <div><Loading /></div>
                        </>
                    }
                </main>
                <Footer />
            </>
        )
    }
}

export default withRouterHOC(DescriptionPage)