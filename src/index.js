import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistor} from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import Loading from './components/Loading';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <Router>
        <PersistGate loading={<Loading/>} persistor={persistor}>
            <App />
        </PersistGate>
    </Router>
    </Provider>
);


