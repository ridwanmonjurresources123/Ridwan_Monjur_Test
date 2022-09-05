import './App.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/global';
import Loading from './components/notification/loading';
import Navigation from './components/layouts/Navigation/Navigation';
import RoutesApp from './routes';
import Footer from './components/layouts/Footer/Footer';

const theme = {
  colors: {
    header: 'white',
    body: '#fff',
    footer: '#003333',
    primary: '#54DA7D'
  },
  mobile: '768px',
}

function App() {


  return (

    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
        <RoutesApp />
        <Footer />
    </ThemeProvider>
  );
}

export default App;
