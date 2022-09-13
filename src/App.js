import './App.css'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/global'
import Loading from './components/notification/loading'
import Navigation from './components/layouts/Navigation/Navigation'
import RoutesApp from './routes'
import Footer from './components/layouts/Footer/Footer'
import { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllCurrenciesAndCategoriesAction } from './redux/products/products-action'

const theme = {
  colors: {
    header: 'white',
    body: '#fff',
    footer: '#003333',
    primary: '#54DA7D',
    activeBg: 'rgb(217, 215, 215)',
    hoverBg: 'rgb(200, 200, 200, 0.3)',
  },
  mobile: '768px',
}

class App extends Component {
  componentDidMount() {
    this.props.dispatchFetchAllCurrenciesAndCategories()
    }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
        <RoutesApp />
        <Footer />
      </ThemeProvider>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchAllCurrenciesAndCategories : () => dispatch(fetchAllCurrenciesAndCategoriesAction())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)

