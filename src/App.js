import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import GlobalStyle from './global/styles/GlobalStyle';
import theme from './global/styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { Header } from './components/Header';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './store/reduxtoolkit/configureStore';
import Footer from './components/Footer';
import { LoadingInicial } from './components/LoadingInicial';

function App() {
  const persistor = persistStore(store);
  return (
    <>
      <Router>
        <Provider store={store}>
          <PersistGate loading={<LoadingInicial />} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <Header />
              <GlobalStyle />
              <Routes />
              <Footer />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </Router>
    </>
  );
}

export default App;
