import App from './App.jsx'
import  ReactDOM  from 'react-dom/client' 
import React from "react"
import './assets/main.scss'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>  <App /> </BrowserRouter>
)