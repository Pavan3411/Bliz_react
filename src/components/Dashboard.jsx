import React, { useEffect, useState } from 'react'
import { assets, icons } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import PropagateLoader from 'react-spinners/PropagateLoader'
import QuoteSlider from './QuoteSlider'
import axios from 'axios'
import useFetch from './useFetch'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const Dashboard = () => {
  // Fetching buyer dashboard data
  const {
    data: dashboardData,
    loading: dashboardLoading,
    error: dashboardError,
  } = useFetch('/api/buyer-dashboard')

  // Fetching quote listing
  const {
    data: quoteData,
    loading: quoteLoading,
    error: quoteError,
  } = useFetch('/api/getAllQuotesList?page=2', 'POST')

  // Fetching order listing
  const {
    data: orderData,
    loading: orderLoading,
    error: orderError,
  } = useFetch('/api/getOrderList', 'POST')

  // Fetching rfq listing
  const {
    data: rfqData,
    loading: rfqLoading,
    error: rfqError,
  } = useFetch('/api/getRfqsList', 'POST')

  const { NoteIconWhite, RightArrowIcon, rArrow, PlusIcon, lArrow } = icons
  const [activeTab, setActiveTab] = useState(0)
  const [orderListing, setOrderListing] = useState(false)
  const [rfqListing, setRfqListing] = useState(true)
  const [quote, setQuote] = useState(false)
  const navigate = useNavigate()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [navigate])
  // const fetchData = async () => {
  //   const token = localStorage.getItem('token')
  //   console.log('Retrieved token:', token)

  //   if (!token) {
  //     setError('No token found. Please Log in.')
  //     setLoading(false);
  //     return
  //   }
  //   try {
  //     const response = await axios.get(
  //       'https://www.fbi.camsexim.com/api/buyer-dashboard',
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           'Content-Type': 'application/json',
  //         },

  //       }
  //     );
  //     setData(response.data )
  //     console.log('Response data : ', response.data)
  //     // console.log('Headers being sent:', headers)

  //     setLoading(false);
  //     // console.log(setData)
  //   } catch (err) {
  //     console.log('Error fetching data:', err)
  //     setError('Failed to fetch data. Token might be invalid.')
  //     setLoading(false);
  //   }
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])
  // console.log('Data:', data) // Check if rfqsCount is present in the fetched data
  // console.log('RFQs Count:', data.rfqsCount) // This will log the rfqsCount value

  // useEffect(() => {
  //   console.log('Component mounted')
  //   return () => {
  //     console.log('Component unmounted')
  //   }
  // }, [])

  if (dashboardLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <PropagateLoader color="darkRed" size={15} />
      </div>
    )
  }

  if (dashboardError) {
    return <div>{dashboardError}</div>
  }

  if (!dashboardData || !dashboardData.data) {
    return <div>No data available here</div>
  }

  if (quoteLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <PropagateLoader color="darkRed" size={15} />
      </div>
    )
  }

  if (quoteError) {
    return <div>{quoteError}</div>
  }

  if (!quoteData || !quoteData.data) {
    return <div>No data available</div>
  }

  if (orderLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <PropagateLoader color="darkRed" size={15} />
      </div>
    )
  }

  if (orderError) {
    return <div>{quoteError}</div>
  }

  if (!orderData || !orderData.data) {
    return <div>No data available</div>
  }

  if (rfqLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <PropagateLoader color="darkRed" size={15} />
      </div>
    )
  }

  if (rfqError) {
    return <div>{quoteError}</div>
  }

  if (!rfqData || !rfqData.data) {
    return <div>No data available</div>
  }
  // console.log(data)
  return (
    <div className="flex flex-col items-center gap-5 mt-5 rounded-md w-full">
      <div className="space-y-4 p-9 bg-white w-full flex flex-col justify-center rounded-md">
        <div className="flex gap-9 box-border">
          <div className="flex flex-1 justify-between whitespace-nowrap bg-white border-[1px] shadow-lg px-6 p-2 text-base base gap-4 rounded-md min-h-28 ">
            <div className="flex items-center gap-4">
              <span>
                <Link
                  to="/rfq-form"
                  className="text-white bg-buttonRed flex justify-center items-center rounded-md w-[60px] h-[60px] border-none"
                >
                  <p className="text-white">
                    <img src={assets.plus_img} alt="" className="w-7 h-7" />
                  </p>
                </Link>
              </span>
              <span className="leading-4">
                <p className="text-grayShade">Post a new</p>
                <p className="font-bold text-base">Requirement</p>
              </span>
            </div>
            <div className="flex  items-end">
              <button className="text-white bg-grayShade rounded-md px-4 p-[2px] gap-2 flex justify-around items-center text-xs">
                <img src={assets.repeat_png} alt="" className="w-3   h-3" />
                <p className="font-semibold p-[3px]">Repeat RFQs</p>
              </button>
            </div>
          </div>
          <div className="bg-white p-4 flex flex-1 justify-between items-center border-[1px] shadow-lg text-base px-6 rounded-md">
            <span className="flex gap-4 items-center">
              <span
                className="bg-white border-[1px] border-gray-200 flex justify-center items-center shadow-lg rounded-full
               w-12 h-12"
              >
                <p className="font-bold text-2xl">
                  {dashboardData?.data?.unpaidOrders}
                </p>
              </span>

              <div className="">
                <p className="text-sm font-sm">new</p>
                <h1 className="font-bold text-base leading-4">
                  Orders Confirmed
                </h1>
                <p className="font-medium text-sm text-buttonRed">
                  Payment pending
                </p>
              </div>
            </span>
            <div>
              <button className="text-white bg-buttonRed flex justify-center items-center rounded-md py-3 px-4 w-[60px] h-[60px]">
                <p className="text-sm leading-4">Pay now</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white md:w-full w-[95%] rounded-md p-5">
        <div className="flex flex-col lg:flex-row gap-9 p-4">
          <div
            className="border-[1px] border-gray-300 lg:basis-1/3 sm:w-2/3 md:w-3/4 space-y-0 shadow-lg bg-white rounded-md min-h-28 text-grayTitle"
            onClick={() => {
              setOrderListing(false)
              setQuote(false)
              setRfqListing(true)
            }}
          >
            <h2
              className={`text-grayHeading flex justify-between font-medium lg:font-semibold gap-2 items-center p-2 pb-1 rounded-t-[5px] ${
                rfqListing ? 'bg-gray-200 ' : 'bg-white'
              }`}
            >
              Total RFQ
              <button className="w-7 h-7 flex justify-center items-center ">
                <img src={assets.Vector_png} alt="" className="w-5 h-5" />
              </button>
            </h2>
            <hr className="border-grayBorder w-full" />
            <p className="font-bold p-2 py-1">
              {dashboardData?.data?.rfqsCount}
            </p>
            <div className="flex gap-2 justify-between text-xs p-2 pt-1 pb-2 ">
              <button className="bg-lightBlue rounded-md p-1 px-3 cursor-pointer">
                <p className="">{`Processing-${dashboardData?.data?.rfqInProgress}`}</p>
              </button>
              <button className="bg-lightGreen rounded-md p-1 px-3 cursor-pointer">
                <p className="">{`Completed-${dashboardData?.data?.rfqCompleted}`}</p>
              </button>
              <button className="bg-dimRed rounded-md p-1 px-3 cursor-pointer">
                <p className="">{`Cancelled-${dashboardData?.data?.rfqCancelled}`}</p>
              </button>
            </div>
          </div>
          <div
            className="border-[1px] border-gray-300 lg:basis-1/3 sm:w-2/3 md:w-3/4 space-y-0 shadow-lg bg-white rounded-md min-h-28 text-grayTitle"
            onClick={() => {
              setOrderListing(false)
              setQuote(true)
              setRfqListing(false)
            }}
          >
            <h2
              className={`text-grayHeading flex justify-between font-medium lg:font-semibold gap-2 items-center p-2 pb-1 rounded-t-[5px] ${
                quote ? 'bg-gray-200' : 'bg-white'
              }`}
            >
              Total Quotes
              <button className="w-7 h-7 flex justify-center items-center ">
                <img src={assets.Vector_png} alt="" className="w-5 h-5" />
              </button>
            </h2>
            <hr className="border-grayBorder w-full" />
            <p className="font-bold p-2 py-1 text-grayTitle">
              {dashboardData?.data?.quotesCount}
            </p>
            <div className="flex gap-2 justify-between text-xs p-2 pt-1 pb-2 ">
              <button className="bg-lightBlue rounded-md p-1 px-3 cursor-pointer">
                <p className="">Received-7</p>
              </button>
              <button className="bg-lightGreen rounded-md p-1 px-3 cursor-pointer">
                <p className="">Accepted-5</p>
              </button>
              <button className="bg-dimRed rounded-md p-1 px-3 cursor-pointer">
                <p className="">Expired-1</p>
              </button>
            </div>
          </div>
          <div
            className="border-[1px] border-gray-300 lg:basis-1/3 sm:w-2/3 md:w-3/4 space-y-0 shadow-lg bg-white rounded-md min-h-28 text-grayTitle"
            onClick={() => {
              setOrderListing(true)
              setQuote(false)
              setRfqListing(false)
            }}
          >
            <h2
              className={`text-grayHeading flex justify-between font-medium lg:font-semibold gap-2 items-center p-2 pb-1 rounded-t-[5px] ${
                orderListing ? 'bg-gray-200' : 'bg-white'
              }`}
            >
              Total Orders
              <button className="w-7 h-7 flex justify-center items-center ">
                <img src={assets.Vector_png} alt="" className="w-5 h-5" />
              </button>
            </h2>
            <hr className="border-grayBorder w-full" />
            <p className="font-bold p-2 py-1 text-grayTitle">
              {dashboardData?.data?.totalOrder}
            </p>
            <div className="flex gap-2 justify-between text-xs p-2 pt-1 pb-2 ">
              <button className="bg-lightBlue rounded-md p-1 px-3 cursor-pointer">
                <p className="">
                  Processing- {dashboardData?.data?.orderInProgress}
                </p>
              </button>
              <button className="bg-lightGreen rounded-md p-1 px-3 cursor-pointer">
                <p className="">{`Completed-${dashboardData?.data?.orderCompleted}`}</p>
              </button>
              <button className="bg-dimRed rounded-md p-1 px-3 cursor-pointer">
                <p className="">{`Cancelled-${dashboardData?.data?.orderCancelled}`}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {rfqListing && (
        <div className="space-y-0 bg-white mb-5 w-11/12 md:w-full rounded-md">
          <div className="p-4 flex justify-between pr-20 items-center">
            <div className="flex gap-2">
              <img src={assets.orderSvg} alt="" className="w-6 h-6" />
              <h1 className="font-bold text-grayText">Rfq Listing</h1>
            </div>
            
          </div>
          <hr className="border-grayText border-[1px]" />
          <div className="overflow-x-auto md:overflow-hidden scrollbar-thin scrollbar-thumb-buttonRed scrollbar-track-blue-100 px-7">
            <div className="text-grayHeading text-[13px] lg:text-base grid items-center w-[140%] sm:w-11/12 grid-cols-[0.2fr,1fr,1fr,1fr,1fr,1fr] mt-3 mx-5 font-normal">
              <span className="border-[1px] border-gray-500 w-3 h-3 rounded-sm"></span>
              <p className="whitespace-nowrap">Rfq ID</p>
              <p className="whitespace-nowrap flex">Payment Method</p>
              <p className="whitespace-nowrap">Product</p>
              <p className="whitespace-nowrap flex gap-1">
                <span className="hidden sm:block">Expected</span> Delivery Date
              </p>
              <p className="whitespace-nowrap flex justify-center items-center">
                Status
              </p>
            </div>
            <div></div>
            <hr className="border-grayTitle mt-3 w-full px-4" />
            {rfqData?.data?.map((rfq, index) => (
              <div key={index}>
                <div className="text-grayTitle grid lg:text-sm text-sm items-center place-content-center w-[140%] sm:w-11/12 grid-cols-[0.2fr,1fr,1fr,1fr,1fr,1fr] my-3 mx-5 font-normal">
                  <span className="border-[1px] border-gray-500 w-3 h-3 rounded-sm whitespace-nowrap flex justify-center items-center"></span>
                  <Link
                    to="/rfq"
                    className="whitespace-nowrap sm:text-xs md:text-sm flex"
                  >
                    {rfq.referenceNumber}
                  </Link>
                  <p className="flex text-[13px]">{rfq.payment_term}</p>
                  <p className="whitespace-nowrap text-[13px] gap-1 flex">
                    {rfq.product_count}
                  </p>
                  <p className="whitespace-nowrap text-[13px] flex  gap-1">
                    {rfq.expected_delivery}
                  </p>
                  <span className="flex justify-center items-center">
                    <button className="bg-lightBlue text-grayTitle rounded-full p-1 px-16 flex justify-center items-center text-[9px] lg:text-[12px] whitespace-nowrap w-40">
                      {rfq.status}
                    </button>
                  </span>
                </div>
                <hr className="border-grayHr mt-3 w-full px-4" />
              </div>
            ))}
          </div>
        </div>
      )}
      {orderListing && (
        <div className="space-y-0 bg-white mb-5 w-11/12 md:w-full rounded-md">
          <div className="p-4 flex justify-between pr-20 items-center">
            <div className="flex gap-2">
              <img src={assets.orderSvg} alt="" className="w-6 h-6" />
              <h1 className="font-bold text-grayText">Order Listing</h1>
            </div>

          </div>
          <hr className="border-grayText border-[1px]" />
          <div className="overflow-x-auto md:overflow-hidden scrollbar-thin scrollbar-thumb-buttonRed scrollbar-track-blue-100 px-7">
            <div className="text-grayHeading text-[13px] lg:text-base grid items-center w-[140%] sm:w-11/12 grid-cols-[0.2fr,1fr,1fr,1fr,1fr,1fr] mt-3 mx-5 font-normal">
              <span className="border-[1px] border-gray-500 w-3 h-3 rounded-sm"></span>
              <p className="whitespace-nowrap">Order ID</p>
              <p className="whitespace-nowrap flex">Payment Method</p>
              <p className="whitespace-nowrap">Date Created</p>
              <p className="whitespace-nowrap flex gap-1">
                <span className="hidden sm:block">Expected</span> Delivery Date
              </p>
              <p className="whitespace-nowrap flex justify-center items-center">
                Status
              </p>
            </div>
            <div></div>
            <hr className="border-grayTitle mt-3 w-full px-4" />
            {orderData?.data?.map((order, index) => (
              <div key={index}>
                <div className="text-grayTitle grid lg:text-sm text-sm items-center place-content-center w-[140%] sm:w-11/12 grid-cols-[0.2fr,1fr,1fr,1fr,1fr,1fr] my-3 mx-5 font-normal">
                  <span className="border-[1px] border-gray-500 w-3 h-3 rounded-sm whitespace-nowrap flex justify-center items-center"></span>
                  <Link
                    to="/rfq"
                    className="whitespace-nowrap sm:text-xs md:text-sm flex"
                  >
                    {order.orderNumber}
                  </Link>
                  <p className="flex text-[13px]">{order?.paymentTerm}</p>
                  <p className="whitespace-nowrap text-[13px] gap-1 flex">
                    {`${order.created_at_date} ${order.created_at_time}`}
                    <span className=" hidden sm:block"> AM</span>
                  </p>
                  <p className="whitespace-nowrap text-[13px] flex  gap-1">
                    {order?.expected_date &&
                      new Date(order.expected_date)
                        .toLocaleDateString('en-GB')
                        .replace(/\//g, '-')}

                    <span className="hidden sm:block"></span>
                  </p>
                  <span className="flex justify-center items-center">
                    <button className="bg-lightBlue text-grayTitle rounded-full p-1 px-16 flex justify-center items-center text-[9px] lg:text-[12px] whitespace-nowrap w-28">
                      {order.orderStatus}
                    </button>
                  </span>
                </div>
                <hr className="border-grayHr mt-3 w-full px-4" />
              </div>
            ))}
          </div>
        </div>
      )}

      {quote && (
        <>
          <QuoteSlider />
          <div className="bg-white mb-5 w-11/12 md:w-full flex flex-col justify-center rounded-md">
            <div className="p-4">
              <div className="flex gap-2">
                <img src={assets.orderSvg} alt="" className="w-6 h-6" />
                <h1 className="font-bold text-grayText">Quotes Listing</h1>
              </div>
              
            </div>
            <hr className="border-grayText border-[1px]" />
            <div className="overflow-x-auto md:overflow-hidden scrollbar-thin scrollbar-thumb-buttonRed scrollbar-track-blue-100 px-7 mb-10">
              <div className="text-grayHeading text-[13px] lg:text-base grid items-center w-[140%] sm:w-11/12 grid-cols-[0.2fr,1fr,1fr,1fr,1fr,1fr] mt-3 mx-5 font-normal">
                <span className="border-[1px] border-gray-500 w-3 h-3 rounded-sm"></span>
                <p className="whitespace-nowrap">Quote ID</p>
                <p className="whitespace-nowrap flex">Total Price</p>
                <p className="whitespace-nowrap">Product</p>
                <p className="whitespace-nowrap flex gap-1">Suppliers Name</p>
                <p className="whitespace-nowrap flex justify-center items-center">
                  Expires in
                </p>
              </div>
              <hr className="border-grayTitle mt-3 w-full px-4" />
              {quoteData?.data?.map((quote, index) => (
                <>
                  <div className="text-grayTitle grid lg:text-sm text-sm items-center place-content-center w-[140%] sm:w-11/12 grid-cols-[0.2fr,1fr,1fr,1fr,1fr,1fr] my-3 mx-5 font-normal">
                    <span className="border-[1px] border-gray-500 w-3 h-3 rounded-sm whitespace-nowrap flex justify-center items-center"></span>
                    <p className="whitespace-nowrap sm:text-xs md:text-sm flex text-blackHeading">
                      {quote?.quoteNumber}
                    </p>
                    <p className="flex font-bold text-sm">{`Rp ${quote.TotalPrice}`}</p>
                    <p className="whitespace-nowrap gap-1 flex">
                      {quote?.productCount}
                    </p>
                    <p className="whitespace-nowrap flex  gap-1">
                      {quote?.supplier_name}
                    </p>
                    <span className="flex justify-center items-center">
                      {quote.expires_in}
                    </span>
                  </div>

                  <hr className="border-grayBorder mt-3 w-full px-4" />
                </>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Dashboard
