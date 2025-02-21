import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { assets, icons } from '@assets/assets'
import Card from '@reusables/Card'

const SidePanel = ({ closePanel, showSidePanel }) => {
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
    postIcon,
    dashboard_Icon,
    rfq_Icon,
    order_Icon,
    payment_Icon,
    address_Icon,
    checkBoxIcon,
  } = icons

  const location = useLocation()

  const links = [
    {
      label: 'Dashboard',
      icon: dashboard_Icon,
      to: '/',
      showNumber: false,
      width: 6,
      height: 6,
    },
    {
      label: 'Post a New RFQ',
      icon: postIcon,
      to: '/rfq-form',
      showNumber: false,
      width: 6,
      height: 6,
    },

    {
      label: 'RFQ',
      icon: rfq_Icon,
      to: '/rfq',
      showNumber: true,
      width: 6,
      height: 6,
    },
    {
      label: 'Quotes',
      icon: checkBoxIcon,
      to: '/quote',
      showNumber: true,
      width: 6,
      height: 6,
    },
    {
      label: 'Orders',
      icon: order_Icon,
      to: '/order',
      showNumber: true,
      width: 6,
      height: 6,
    },
    // { label: 'Groups', icon: GroupsIcon, to: '#' },
    // { label: 'Approval', icon: ApprovalIcon, to: '#' },
    {
      label: 'Payment',
      icon: payment_Icon,
      to: '/payment',
      showNumber: false,
      width: 7,
      height: 7,
    },

    {
      label: 'Address',
      icon: address_Icon,
      to: '/address',
      showNumber: false,
      width: 6,
      height: 6,
    },
    // { label: 'Setting', icon: SettingIcon, to: '#' },
  ]
  useEffect(() => {
    const isMobile = window.innerWidth <= 768

    if (isMobile && showSidePanel) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [showSidePanel])
  // console.log(links[0].icon)

  return (
    <div className="space-y-1 sm:space-y-5 mt-5 h-full">
      <ul className="space-y-1 bg-white shadow-2xl p-0 md:space-y-3 max-w-72 2xl:max-w-80 rounded-md flex flex-col justify-center">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className={`flex items-center gap-5 font-normal px-4 rounded-[4px] ${
              location.pathname === link.to
                ? 'bg-fbiRed text-white'
                : 'bg-transparent text-grayText hover:text-darkRed'
            }`}
            onClick={closePanel}
          >
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
              <link.icon
                className={`w-${link.width} h-${link.height} text-grayText ${
                  location.pathname == link.to ? 'text-white' : ''
                }`}
              />
              {/* <icon propName={link.icon}/> */}
              {/* <img
                src={link.icon}
                alt=""
                className={`w-${link.width} h-${link.height} ${
                  location.pathname == link.to
                    ? 'text-white fill-white '
                    : ' text-gray-50'
                } `}
              /> */}
            </div>
            <div className="justify-between items-center py-1 flex flex-1">
              <p className="tracking-wider text-base font-medium lg:text-sm xl:text-base p-1">
                {link.label}
              </p>
              {link.showNumber && (
                <div
                  className={`h-6 w-6 border-[1px] border-black rounded-md ml-16 bg-transparent flex items-center justify-center font-normal text-[14px] ${
                    location.pathname === link.to
                      ? 'text-white border-white'
                      : ''
                  }`}
                >
                  0
                </div>
              )}
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
