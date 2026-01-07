import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import ChefDashboard from './chef/ChefDashboard'

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Router> */}
          <Navbar />
            <div className='min-h-screen'>
              <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/chef' element={<ChefDashboard />} />

              </Routes>
            </div>
          <Footer />
        {/* </Router> */}
      </BrowserRouter>
    </>
  )
}

export default App
