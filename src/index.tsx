import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Persistor } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import App from './app/App';
import Loader from './app/components/Loader';
import store from './app/store/store';
import theme from './app/theme/theme';

const persistor: Persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ThemeProvider>
);
