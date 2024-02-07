import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './authContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   </AuthProvider>
  </React.StrictMode>,
)
