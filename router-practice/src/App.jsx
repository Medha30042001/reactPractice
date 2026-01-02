import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ProtectedRoute from './routes/ProtectedRoutes'
import Todos from './pages/Todos'
import TodoDetails from './pages/TodoDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        {/* Protected routes */}
        <Route path='/todos' element={
          <ProtectedRoute>
            <Todos />
          </ProtectedRoute>
        } />
        <Route path='/todos/:id' element={
          <ProtectedRoute>
            <TodoDetails />
          </ProtectedRoute>
        } />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
