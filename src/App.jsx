import React, { useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Header from '@reusables/Header'
import Footer from '@reusables/Footer'
import Home from '@pages/DashBoard/Home'
import FormRfq from '@pages/Home/FormRfq'
import Rfq from '@pages/Rfq/Rfq'
import Payment from '@pages/Payment/Payment'
import Order from '@pages/Order/Order'
import SidePanel from '@reusables/SidePanel'
import Login from '@pages/Login/Login'
import Setting from '@pages/Setting/Setting'
import Address from '@pages/Address/Address'
import Notification from '@components/Notification'
import Quotes from '@pages/Quotes/Quotes'
import UserContextProvider from '@context/UserContextProvider'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux'
import UserContext from './context/UserContext'

function App() {
  const [showSidePanel, setShowSidePanel] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const location = useLocation()

  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1) // Navigate to previous page
  }

  const handleLogin = () => {
    setIsLogin(true)
  }

  const toggleSidePanel = () => {
    setShowSidePanel((prev) => !prev)
  }
  return (
    <UserContextProvider>
      <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={true}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
bodyClassName='toastBody'
/>
    <div className="h-screen">
      {location.pathname === '/login' ? (
        <Login onClick={handleLogin} />
      ) : (
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
                <SidePanel
                  closePanel={toggleSidePanel}
                  showSidePanel={showSidePanel}
                />
              </div>
            </div>
          )}
          <div className="app mt-16 bg-grayBg min-h-screen">
            
              <Routes>
                
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/rfq-form" element={<FormRfq />} />
                <Route path="/rfq" element={<Rfq />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/order" element={<Order />} />
                <Route
                  path="/setting"
                  element={<Setting handleGoBack={handleGoBack} />}
                />
                <Route path="/address" element={<Address />} /> 
                <Route path="/quote" element={<Quotes />} />
                <Route path="/notification" element={<Notification />} />
              </Routes>
            
          </div>
          <Footer className=''/>
        </>
      )}
    </div>
    </UserContextProvider>
  )
}

export default App
