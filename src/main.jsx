import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './assets/Navbar/Navbar.css'

import Navbar from './assets/Navbar/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar/>
  </React.StrictMode>,
)
