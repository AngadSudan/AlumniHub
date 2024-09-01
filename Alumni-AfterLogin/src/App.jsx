import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Header} from "./Components/index"
import {Outlet} from 'react-router-dom'
function App() {

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
