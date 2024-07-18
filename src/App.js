import React from 'react'
import { Router, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Hrader from './Components/Hrader'
import AddBlog from './Pages/AddBlog'
import AddCategory from './Pages/AddCategory'
import SingleBlog from './Pages/SingleBlog'
import ProtectedRoutes from './Services/ProtectedRoutes'


const App = () => {
  return (
    <>
      <Hrader />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* Protected Routes */}
        <Route path='/' element={<ProtectedRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='/add blog' element={<AddBlog />} />
          <Route path='/add category' element={<AddCategory />} />
          <Route path='/blog/:id' element={<SingleBlog />} />
        </Route>
      </Routes>

    </>
  )
}

export default App;
