import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import { Suspense, lazy } from 'react'
// import Dashboard from './Dashboard'
// import Settings from './Settings'
// import Home from './Home'

const Home = lazy(() => import('./Home'));
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));


function App() {

  return (
    <>
      <Suspense fallback={<h2>Loading page...</h2>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </Suspense>      
    </>
  )
}

export default App
