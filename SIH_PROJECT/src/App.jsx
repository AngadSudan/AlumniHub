
import './App.css'
import {Header, Footer} from "./Components/index"
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
      <h1 className='text-center text-3xl'>Alumni Hub</h1>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
