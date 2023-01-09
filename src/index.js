import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize';
import { App } from 'components/App';
import { theme } from './utils/theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
