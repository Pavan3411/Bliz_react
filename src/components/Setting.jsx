import React, { useState } from 'react'
import {
  assets,
  icons,
  designations,
  departments,
  religions,
  maritalStatus,
} from '../assets/assets'

const Setting = ({ handleGoBack }) => {
  const {
    LeftArrowIcon,
    UserFillIcon,
    LockFillIcon,
    LineArrowIcon,
    TickIcon,
    SearchImageIcon,
  } = icons
  const [activeTab, setActiveTab] = useState(0)
  const [currentTab, setCurrentTab] = useState(0)

  const tabs = [{ label: 'Profile' }, { label: 'Admin Setting' }]

  return (
    <div className="flex flex-col space-y-10 m-2">
      <div className="flex bg-gray-200 mt-2 p-2 w-full justify-between font-medium">
        <div className="flex gap-10">
          {tabs.map((tab, index) => (
            <p
              key={index}
              onClick={() => setActiveTab(index)}
              className={`cursor-pointer pb-1 text-[13px] ${
                activeTab === index
                  ? 'border-b-2 border-grayShade text-lightRed'
                  : ''
              }`}
            >
              {tab.label}
            </p>
          ))}
        </div>
        <button className="border-2 border-grayShade px-1">
          <span className="flex items-center">
            <LeftArrowIcon />
            <p className="text-sm" onClick={handleGoBack}>
              Back
            </p>
          </span>
        </button>
      </div>
      <div className="flex mx-12">
        <div className="border-2 border-gray-200 w-1/4 ">
          <span
            className={`flex gap-4 cursor-pointer p-2 items-center justify-between ${
              currentTab === 0 ? 'bg-fadeRed text-lightRed' : ''
            }`}
            onClick={() => setCurrentTab(0)}
          >
            <span className="flex gap-5 items-center">
              <UserFillIcon className="w-5 h-5" />
              <p className="text-black">Personal Info</p>{' '}
            </span>
            <span>{currentTab === 0 ? <LineArrowIcon /> : ''} </span>
          </span>
          <span
            className={`flex gap-4 cursor-pointer p-2 items-center justify-between ${
              currentTab === 1 ? 'bg-fadeRed text-lightRed' : ''
            }`}
            onClick={() => setCurrentTab(1)}
          >
            <span className="flex gap-5 items-center">
              <LockFillIcon className="w-5 h-5" />
              <p className="text-black">Change Password</p>
            </span>
            <span>{currentTab === 1 ? <LineArrowIcon /> : ''}</span>
          </span>
        </div>
        {currentTab === 0 && (
          <div className="border-2 border-gray-200 border-l-0 w-3/4 justify-between flex p-5">
            <div className="w-1/4 flex flex-col space-y-2 items-center">
              <img src={assets.ps} className="border-2 w-24 h-24 rounded-sm" />

              <label className="rounded-md p-1 px-2 appearance-none border-2 border-gray-400 font-medium ">
                <input type="file" className="hidden" />
                Change Avatar
              </label>
              <p className="text-sm text-gray-400">Upload JPG or PNG Image</p>
            </div>
            <div className="w-3/4 flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-10">
                <input
                  type="text"
                  value="Indonesia"
                  readOnly
                  className="rounded border-2 p-1 col-span-1"
                />
              </div>
              <div className="mid flex flex-col space-y-5">
                <p className="text-darkRed font-semibold">
                  Personal Information
                </p>
                <div className=" grid grid-cols-2 w-full gap-10">
                  <span className="col-span-1">
                    {/* <label htmlFor="fname">First Name</label> */}
                    <input
                      type="text"
                      name="fname"
                      value="Pinca"
                      className="border-2 rounded p-1 w-full"
                    />
                  </span>
                  <span className=" col-span-1">
                    {/* <label htmlFor="lname">Last Name</label> */}
                    <input
                      type="text"
                      name="lname"
                      value="Solvis"
                      className="border-2 rounded p-1 w-full"
                    />
                  </span>
                </div>
                <div className="grid grid-cols-1">
                  <span className="col-span-1">
                    {/* <label htmlFor="email">Email</label> */}
                    <input
                      type="email"
                      value=""
                      className="border-2  p-1 rounded w-full"
                    />
                  </span>
                </div>
                <div className=" grid grid-cols-2 w-full gap-10">
                  <span className="col-span-1">
                    {/* <label htmlFor="num">First Name</label> */}
                    <input
                      type="number"
                      name="num"
                      value="9123745283"
                      className="border-2 rounded p-1 w-full"
                    />
                  </span>
                  <span className=" col-span-1">
                    {/* <label htmlFor="lname">Last Name</label> */}

                    <select
                      name="designation"
                      className="border-2 rounded p-1 w-full"
                    >
                      <option value="select" disabled selected>
                        Select Designation
                      </option>
                      {designations.map((designation, index) => (
                        <option key={index} value={designation}>
                          {designation}
                        </option>
                      ))}
                    </select>
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-10">
                  <select
                    name="designation"
                    className="border-2 rounded p-1 w-full col-span-1"
                  >
                    <option value="select" disabled selected>
                      Select Department
                    </option>
                    {departments.map((department, index) => (
                      <option key={index} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="bottom flex flex-col space-y-5">
                <p className="text-darkRed font-semibold">Other Information</p>
                <div className=" grid grid-cols-2 w-full gap-10">
                  <span className=" col-span-1">
                    {/* <label htmlFor="lname">Last Name</label> */}

                    <select
                      name="religion"
                      className="border-2 rounded p-1 w-full"
                    >
                      <option value="select">Select Religion</option>
                      {religions.map((religion, index) => (
                        <option key={index} value={religion}>
                          {religion}
                        </option>
                      ))}
                    </select>
                  </span>
                  <span className=" col-span-1">
                    {/* <label htmlFor="lname">Last Name</label> */}

                    <select
                      name="maritalStatus"
                      className="border-2 rounded p-1 w-full"
                    >
                      <option value="select">Select Marital Status</option>
                      {maritalStatus.map((maritalStatus, index) => (
                        <option key={index} value={maritalStatus}>
                          {maritalStatus}
                        </option>
                      ))}
                    </select>
                  </span>
                </div>
                <div className=" grid grid-cols-2 w-full gap-10">
                  <span className="col-span-1">
                    {/* <label htmlFor="date">Date</label> */}
                    <input
                      type="date"
                      name="date"
                      className="border-2 rounded p-1 w-full"
                    />
                  </span>
                  <span className="relative w-full">
                    <input
                      type="text"
                      name="birth"
                      id="birth"
                      className="border-2 rounded p-1 w-full peer placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Place of birth"
                    />
                    <label
                      htmlFor="birth"
                      className="absolute left-3 top-0 transform -translate-y-1/2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:-translate-y-[11px]
    peer-placeholder-shown:bg-white  peer-focus:top-0 peer-focus:text-red-500 peer-focus:text-sm"
                    >
                      Place of birth
                    </label>
                  </span>
                </div>
                <div className=" grid grid-cols-2 w-full gap-10">
                  <span className="col-span-1">
                    <span className="relative">
                      <label
                        htmlFor="family"
                        className="absolute -top-1 text-xs bg-white left-4 -translate-y-full"
                      >
                        Family card
                      </label>
                      <input
                        type="text"
                        name="family"
                        className="border-2 rounded p-1 w-full h-12 focus:outline-none"
                        readOnly
                      />
                      <label
                        className="absolute -bottom-1 left-5 border-2 border-gray-300 flex gap-2 items-center p-[1px] text-[12px] font-semibold rounded"
                        type="file"
                      >
                        <SearchImageIcon className="w-4 h-4" />
                        <p>Browse</p>
                        <input type="file" className="hidden" />
                      </label>
                    </span>
                  </span>
                  <span className="relative col-span-1">
                    <label
                      htmlFor="gender"
                      className="absolute bg-white -top-2 left-2 text-xs px-1 "
                    >
                      Gender
                    </label>

                    <select
                      name="gender"
                      className="border-2 rounded p-1 w-full focus:outline-none focus:ring-1 focus:ring-red-300 h-12"
                      required
                    >
                      <option value="gender">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </span>
                </div>
                <div className=" grid grid-cols-2 w-full gap-10">
                  <span className="col-span-1">
                    {/* <label htmlFor="ktpnik">KTPNIK</label> */}
                    <input
                      type="text"
                      name="ktpnik"
                      className="border-2 rounded p-1 w-full"
                    />
                  </span>
                  <span className=" col-span-1">
                    {/* <label htmlFor="npwp">NPWP</label> */}
                    <input
                      type="text"
                      name="npwp"
                      className="border-2 rounded p-1 w-full"
                    />
                  </span>
                </div>
                <div className=" grid grid-cols-2 w-full gap-10">
                  <span className="col-span-1">
                    {/* <label htmlFor="ktpnik">KTPNIK</label> */}
                    <input
                      type="file"
                      name="ktpnik"
                      className="border-2 rounded p-1 w-full"
                    />
                  </span>
                  <span className=" col-span-1">
                    {/* <label htmlFor="npwp">NPWP</label> */}
                    <input
                      type="file"
                      name="npwp"
                      className="border-2 rounded p-1 w-full"
                    />
                  </span>
                </div>
                <div className=" grid grid-cols-2 w-full gap-10">
                  <span className="col-span-1">
                    {/* <label htmlFor="selfie">Identity with selfie</label> */}
                    <input
                      type="file"
                      name="selfie"
                      className="border-2 rounded p-1 w-full"
                    />
                  </span>
                </div>
                <span className="flex justify-end">
                  <button className="flex gap-2 items-center border-black border-[1px] p-1">
                    <TickIcon />
                    <p className="text-[13px] font-semibold">Save Changes</p>
                  </button>
                </span>
              </div>
            </div>
          </div>
        )}
        {currentTab === 1 && (
          <div className="border-2 border-gray-200 border-l-0 w-4/6 justify-between flex p-5 px-16">
            <div className="w-1/3">
              <img src={assets.lock_photo} alt="" className="w-44 h-44" />
            </div>
            <div className="w-2/3 flex flex-col gap-10">
              <span class="input-container">
                <input
                  type="password"
                  name="passwordcurr"
                  id="passwordcurr"
                  class="input-field"
                  placeholder="Current Password"
                />
                <label for="passwordcurr" class="input-label">
                  Current Password
                </label>
              </span>
              <span class="input-container">
                <input
                  type="password"
                  name="passwordnew"
                  id="passwordnew"
                  class="input-field"
                  placeholder="New Password"
                />
                <label for="passwordnew" class="input-label">
                  New Password
                </label>
              </span>
              <span class="input-container">
                <input
                  type="password"
                  name="passwordcon"
                  id="passwordcon"
                  class="input-field"
                  placeholder="Confirm Password"
                />
                <label for="passwordcon" class="input-label">
                  Confirm Password
                </label>
              </span>

              <span></span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Setting
