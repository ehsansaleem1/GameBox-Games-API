import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={process.env(DOMAIN)}
    clientId={process.env(CLIENT_ID)}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <BrowserRouter>
  		  <App />
      </BrowserRouter>
    </Auth0Provider>
)
