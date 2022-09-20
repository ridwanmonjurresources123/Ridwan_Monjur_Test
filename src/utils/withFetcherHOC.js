import { Component } from "react"

const withFetch = (WrappedComponent, fetchData ) => {
    return class extends Component {
        state = {
            data: null,
            isLoading: false,
            isError: false
        }

        async componentDidMount() {
            this.setState({
                data: null,
                isLoading: true,
                isError: false
            })

            try {
                const response = await fetch(requestUrl)
                if (response.ok) {
                    const data = await response.json()

                    this.setState((prev) => {
                        return {
                            ...prev,
                            isLoading: true,
                            isError: false
                        }
                    })
                } else {
                    throw new Error("Fetch request error")
                }
            } catch (err) {
                this.setState((prev) => {
                    return {
                        ...prev,
                        isLoading: true,
                        isError: false
                    }
                })
            }
        }

        render() {
            return (
                <WrappedComponent
                    data={this.state.data}
                    isLoading={this.state.isLoading}
                    isError={this.state.isError}
                    {...props}
                    getData={(requestUrl) => fetchData(requestUrl)}
                />

            )
        }
    }
}

const Temp = changeColor(Test)

function withFetch(WrappedComponent, requestUrl) {
    const WithFetch = (props) => {


        useEffect(() => {
            if (requestUrl) fetchData(requestUrl)
        }, [])

        const fetchData = async (requestUrl) => {

        }

        return (
            <WrappedComponent
                data={data}
                isLoading={isLoading}
                isError={isError}
                {...props}
                getData={(requestUrl) => fetchData(requestUrl)}
            />
        )
    }

    return WithFetch
}

export default withFetch