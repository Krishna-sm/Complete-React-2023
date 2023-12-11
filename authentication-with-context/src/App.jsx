import Navbar from "./Components/Navbar"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
const App = () => {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <div className="d-flex justify-content-center align-items-center" style={{minHeight:"82vh"}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
        </div>
    </BrowserRouter>
    </>
  )
}

export default App