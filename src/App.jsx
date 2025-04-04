import { useState } from 'react'
import Navbar from './component/Navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home/home'
import Footer from './component/Footer/footer'
import AboutUs from './component/AboutUs/aboutus'
import LazeezPackages from './component/LazeezPackages/lazeezPackages'
import SignupForm from './component/signup/signup'
import LoginForm from './component/login/login'
import ForgotPass from './component/login/enterEmail'
import TwoStepPage from './component/login/twoStepPage'
import ResetPass from './component/login/resetpassword'
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutUs/>} />  
      <Route path="/Lazeez-Packages" element={<LazeezPackages/>} />  
      <Route path="/Signup-Form" element={<SignupForm/>} />  
      <Route path="/Login-Form" element={<LoginForm/>} />  
      <Route path="/Forgot-Pass" element={<ForgotPass/>} />  
      <Route path="/Two-Step-Page" element={<TwoStepPage/>} />  
      <Route path="/Reset-Pass" element={<ResetPass/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
