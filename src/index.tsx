import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Persistor } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import App from './app/App';
import store from './app/store/store';

const persistor: Persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
