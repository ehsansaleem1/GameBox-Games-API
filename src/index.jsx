import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain='dev-n83sckv1u768rsp5.us.auth0.com'
    clientId='ESBK1ZuUDDNVmLCniwIpcRPeK6k4683D'
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <BrowserRouter>
  		  <App />
      </BrowserRouter>
    </Auth0Provider>
)