import React from 'react'
import Test from './Test'
import Login1 from './components/login/Login1'
import Login2 from './components/login/Login2'
import Login3 from './components/login/Login3'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'
const App = () => {
  return <>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login1' element={<Login1 />} />
        <Route path='/login2' element={<Login2 />} />
        <Route path='/login3' element={<Login3 />} />
        {/* <Route path='/login3' element={<Test />} /> */}
      </Routes>
    </BrowserRouter>
    {/* <Test /> */}
    {/* <Login1 /> */}
    {/* <Login2 /> */}

  </>
}

export default App