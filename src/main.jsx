import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RegisterPage from './components/RegisterPage/RegisterPage.jsx'
import LoginPage from './components/LoginPage/LoginPage.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Layout from './components/Layout.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path=''  element={<Home />} />
      <Route path='about'  element={<About />} />
      <Route path='contact'  element={<Contact />} />
      <Route path='register'  element={<RegisterPage />} />
      <Route path='login'  element={<LoginPage/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
