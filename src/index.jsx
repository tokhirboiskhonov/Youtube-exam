import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider as LocalizationProvider} from './Context/Localization';
import {Provider as AuthProvider} from './Context/Authentication' ;
import {Provider as IdProvider} from './Context/Id' ;


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <IdProvider>
  <AuthProvider>
  <LocalizationProvider>
  <App />
  </LocalizationProvider>
  </AuthProvider>
  </IdProvider>
  </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
  );
  