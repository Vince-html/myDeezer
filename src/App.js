import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import GlobalStyle from './global/styles/GlobalStyle';
import theme from './global/styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { Header } from './components/Header';
import store from './store/modules/reduxtoolkit/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

function App() {
  const persistor = persistStore(store);
  return (
    <>
      <Router>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <Header />
              <GlobalStyle />
              <Routes />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </Router>
    </>
  );
}

export default App;
