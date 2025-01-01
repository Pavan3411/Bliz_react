import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { assets, icons } from '../assets/assets'
import Card from './card'


const SidePanel = ({ closePanel,showSidePanel }) => {
  const {
    NoteIcon,
    SettingIcon,
    LocationIcon,
    PaymentIcon,
    TruckIcon,
    FilesIcon,
    HomeIcon,
    ApprovalIcon,
    GroupsIcon,
    CreditIcon,
  } = icons

  const location = useLocation()

  const links = [
    { label: 'Post a New RFQ', icon: assets.postIcon, to: '/rfq-form', showNumber: false },
    { label: 'Dashboard', icon: assets.dashboard_Icon, to: '/', showNumber: false },
    { label: 'RFQ', icon: assets.rfq_Icon, to: '/rfq', showNumber: true },
    { label: 'Orders', icon: assets.order_Icon, to: '/order', showNumber: true },
    // { label: 'Groups', icon: GroupsIcon, to: '#' },
    // { label: 'Approval', icon: ApprovalIcon, to: '#' },
    { label: 'Payment', icon: assets.payment_Icon, to: '/payment', showNumber: true },
    // { label: 'Finance', icon: CreditIcon, to: '/finance', showNumber: false },
    { label: 'Address', icon: assets.address_Icon, to: '/address', showNumber: true },
    // { label: 'Setting', icon: SettingIcon, to: '#' },
  ]
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile && showSidePanel) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = ''; 
    }

    return () => {
      document.body.style.overflow = ''; 
    };
  }, [showSidePanel]);


  return (
    <div className="space-y-1 sm:space-y-2  mt-16 lg:mt-5 h-full">
      
      <ul className="space-y-1 bg-white shadow-2xl p-3 md:space-y-1 max-w-72 2xl:max-w-80 rounded-md">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className={`flex items-center gap-5 font-normal p-1 rounded-md ${
              location.pathname === link.to
                ? 'bg-lightRed text-white'
                : 'bg-transparent text-black hover:text-darkRed'
            }`}
            onClick={closePanel}
          >
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
              <link.icon className="w-full h-full" />
            </div>
            <div className="justify-between flex flex-1">
              <p className="tracking-wider text-base font-medium lg:text-sm xl:text-base">
                {link.label}
              </p>
              {link.showNumber && (
                <div
                className={`h-6 w-6 border-[1px] border-black rounded-md ml-16 bg-transparent flex items-center justify-center font-normal ${
                  location.pathname === link.to ? 'text-white border-white' : ''
                }`}
              >
                0
              </div>
              ) }
              
            </div>
          </Link>
        ))}
        {/* <hr className="h-2 lg:w-80 w-64" /> */}
      </ul>
      <div className="">
        <Card openPanel={closePanel} />
      </div>
    </div>
  )
}

export default SidePanel
