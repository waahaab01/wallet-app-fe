import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Dashbord from './Pages/Dashbord'
import Signup from './Component/Auth/Signup'
import Login from './Component/Auth/Login'
import Authentication from './Component/Auth/Authentication'
import Walletdashboard from './Pages/Walletdashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashbord />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/authentication" element ={<Authentication/> }/>
      <Route path="/wallet" element={<Walletdashboard/>}/>
    </Routes>
  )
}

export default App
