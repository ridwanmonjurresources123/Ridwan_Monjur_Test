import { nanoid } from '@reduxjs/toolkit'
import { Component } from 'react'
import { catchError, fetchAllProductsByCategory } from '../../services/gqlApi'
import CardItem from './CardItem'
import { GridCard } from './styles'


class CardList extends Component {
    state = {
        data: null,
        isLoading: false,
        isError: false
    }

    async fetchAndSetComponentData() {
        let { category } = this.props

        this.setState((prev) => {
            return { ...prev, loading: true }
        })

        let { data, error } = await catchError(
            fetchAllProductsByCategory(category)
                .then(data => data.category.products))

        this.setState({
            data,
            isLoading: false,
            isError: error
        })
    }

    componentDidMount() {
        this.fetchAndSetComponentData()
    }

    componentDidUpdate(prevProps) {
        // if (this.props.router.params.category !== prevProps.router.params.category) {
        if (this.props.category !== prevProps.category) {
            this.fetchAndSetComponentData()
        }
    }

    render() {
        // props defined here but not in constructor: console.log({props: this.props})
        return (
            <>
                <GridCard>
                    {
                        this.state.data && this.state.data.map((value) =>
                            <CardItem cardValue={value} key={nanoid()} />
                        )
                    }
                    {
                        this.state.isError &&
                        <>
                            <div>Error</div>
                        </>
                    }
                    {
                        this.state.isLoading &&
                        <>
                            <div>loading</div>
                        </>
                    }
                </GridCard>

            </>
        )
    }
}

export default CardList