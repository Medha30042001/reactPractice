import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Admin from './pages/Admin'
import FleetCard from './components/FleetCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          
          <Route path='/admin' element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />

          <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
