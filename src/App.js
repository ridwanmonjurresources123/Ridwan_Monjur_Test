import './App.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/global';
import Loading from './components/notification/loading';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {


  return (

    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <header className="App-header">
          <Loading />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
