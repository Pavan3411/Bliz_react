import React, { useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import FormRfq from './components/FormRfq'
import Rfq from './components/Rfq'
import Payment from './components/Payment'
import Order from './components/Order'
import SidePanel from './components/SidePanel'
import Login from './components/Login/Login'
import Setting from './components/Setting'
import Address from './components/Address'
import Finance from './components/Finance'
import Notification from './components/Notification'

function App() {
  const [showSidePanel, setShowSidePanel] = useState(false)
  const [isLogin, setIsLogin] = useState(false);
  const location =useLocation()

  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)  // Navigate to previous page
  }

  const handleLogin = ()=> {
    setIsLogin(true);
  }

  const toggleSidePanel = () => {
    setShowSidePanel((prev) => !prev)
  }
  return (
    <div className="">
      {location.pathname === '/login' ? ( 
        <Login onClick={handleLogin}/>
      ):(
        <>
        <Header className="" toggleSidePanel={toggleSidePanel} />
      {showSidePanel && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-30"
          onClick={toggleSidePanel}
        >
          <div
            className="bg-white h-full w-3/4 max-w-xs fixed left-0 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <SidePanel closePanel={toggleSidePanel} showSidePanel={showSidePanel} />
          </div>
        </div>
      )}
      <div className="app mt-16">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/rfq-form" element={<FormRfq />} />
          <Route path="/rfq" element={<Rfq />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order" element={<Order />} />
          <Route path='/setting' element={<Setting handleGoBack={handleGoBack}/>}/>
          <Route path='/address' element={<Address/>}/>
          <Route path='/finance' element={<Finance/>}/>
          <Route path='/notification' element={<Notification/>}/>
        </Routes>
      </div>
      <Footer />
      </>
      )}
      
    </div>
  )
}

export default App
