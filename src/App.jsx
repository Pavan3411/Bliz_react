import React, {useState} from 'react';
import { Route,Routes}  from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import FormRfq from './components/FormRfq'
import Rfq from './components/Rfq';
import Payment from './components/Payment';
import Order from './components/Order';
import SidePanel from './components/SidePanel';

function App() {
  const [showSidePanel, setShowSidePanel] = useState(false);

  const toggleSidePanel = () => {
    setShowSidePanel((prev) => !prev);
  };
  return (
    <div className=''>
    <Header className='' toggleSidePanel={toggleSidePanel}/>
    {showSidePanel && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-30"
          onClick={toggleSidePanel}
        >
          <div
            className="bg-white h-full w-3/4 max-w-xs fixed left-0 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <SidePanel closePanel={toggleSidePanel} />
          </div>
        </div>
      )}
      <div className='app mt-14'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/rfq-form' element={<FormRfq/>}/>
      <Route path='/rfq' element={<Rfq/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/order' element={<Order/>}/>
    </Routes>
    </div>
    <Footer/>
    </div>
  )
}

export default App
