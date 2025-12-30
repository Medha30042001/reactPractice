import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserList from './pages/UserList'
import UserDetails from './pages/UserDetails'
import UserPosts from './pages/UserPosts'
import ProtectedRoute from './pages/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/users/:id' element={<UserDetails />} />
          <Route path='/users/:id/posts' element={<UserPosts />} />

          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
