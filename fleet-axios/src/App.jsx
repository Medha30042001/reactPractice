import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import FleetDetails from './pages/FleetDetails'
const Admin = lazy(() => import('./pages/Admin'));

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />

          <Route path='/admin' element={
            <Suspense fallback={<p>Loading dashboard...</p>}>
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            </Suspense>
          } />

          <Route path="/fleet/:id" element={
            <ProtectedRoute>
              <FleetDetails />
            </ProtectedRoute>
          } />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
