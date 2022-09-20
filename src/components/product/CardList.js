import { nanoid } from '@reduxjs/toolkit'
import { Component } from 'react'
import { catchError, fetchAllProductsByCategory } from '../../services/gqlApi'
import EmptyNotification from '../notification/empty'
import ErrorNotification from '../notification/error'
import Loading from '../notification/loading'
import CardItem from './CardItem'
import { GridCard } from './styles'


class CardList extends Component {
    state = {
        data: [],
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
        console.log({ state: this.state.data })
        // props defined here but not in constructor: console.log({props: this.props})
        return (
            <>
                <GridCard>
                    {
                        this.state.data !== null &&
                        <>
                            {
                                this.state.data?.map((value) =>
                                    <CardItem cardValue={value} key={nanoid()} />
                                )
                            }
                            {
                                !this.state.data[0] &&
                                <div>
                                    <EmptyNotification message="The list is empty"/>
                                </div>
                            }
                        </>

                    }
                    {
                        this.state.isError &&
                        <>
                            <ErrorNotification message="Could not fetch data" fullScreen={true} />
                        </>
                    }
                    {
                        this.state.isLoading &&
                        <>
                            <Loading />
                        </>
                    }
                </GridCard>

            </>
        )
    }
}

export default CardList