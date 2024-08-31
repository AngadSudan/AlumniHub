import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Home,Blogs,Member,Oppurtunity,Aboutus,SignUp, User,Login} from "./Pages/index.js"
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="Home" element={<Home />} />
      <Route path="Blogs" element={<Blogs />} /> 
      <Route path="Member" element={<Member />} /> 
      <Route path="Oppurtunity" element={<Oppurtunity />} /> 
      <Route path="Aboutus" element={<Aboutus />} /> 
      <Route path="User/" element={<User />} >
        <Route path="Signup"  element={<SignUp />} />
        <Route path="Login"  element={<Login />} /> 
      </Route> 
    </Route>
  )
)
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)