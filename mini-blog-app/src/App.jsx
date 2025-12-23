import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './components/Dashboard'
import BlogDetails from './components/BlogDetails'
import LoginPage from './components/LoginPage'
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFound />} />

        {/* Protected Route */}
        <Route path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />

          {/* Dynamic Routes */}
          <Route path='/blog/:id' 
          element={
            <ProtectedRoute>
              <BlogDetails />
            </ProtectedRoute>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
