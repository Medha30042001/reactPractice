import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import TodoView from '../pages/TodoView'
import ErrorPage from '../pages/ErrorPage'
import NotFound from '../pages/NotFound'

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todos/:id' element={<TodoView />} />
          <Route path='/error' element={<ErrorPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes