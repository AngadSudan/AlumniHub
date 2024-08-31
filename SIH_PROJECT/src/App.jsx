import './App.css'
import {Header, Footer} from "./Components/index"
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
      <Header/>
      <div className='min-h-[100svh] flex justify-center align-middle'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
