import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store/store';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { GoogleOAuthProvider } from '@react-oauth/google';


import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<GoogleOAuthProvider clientId="410436924446-u2rol94obn4mkh9u0r906eh53u6acn1h.apps.googleusercontent.com">
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
</GoogleOAuthProvider>
);
