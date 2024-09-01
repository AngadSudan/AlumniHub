import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Chat,Donation,HR,Profile,Home} from "./Pages/index.js"
import {createBrowserRouter,Route,createRoutesFromElements, RouterProvider} from "react-router-dom"
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="Home" element={<Home/>} />
      <Route path="Donation" element={<Donation/>} />
      <Route path="HR" element={<HR/>} />
      <Route path="Profile" element={<Profile/>} />
      <Route path="Chat" element={<Chat/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
