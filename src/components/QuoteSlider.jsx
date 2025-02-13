import React, { useState, useRef, useEffect } from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader'
import { assets } from '../assets/assets'
import useFetch from './useFetch'

const QuoteSlider = ({ card }) => {
  const { datw: data, loading, error } = useFetch('/api/buyer-dashboard')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const containerRef = useRef(null)
  const quotes = data?.data?.latestQuotes || []
  const visibleCards = 3 // Number of cards visible at once
  const maxIndex = Math.max(0, quotes.length - visibleCards) // Adjust maxIndex for 3 visible cards

  useEffect(() => {
    updateScrollButtons()
    window.addEventListener('resize', updateScrollButtons)
    return () => window.removeEventListener('resize', updateScrollButtons)
  }, [quotes, currentIndex])

  const updateScrollButtons = () => {
    if (containerRef.current) {
      setCanScrollLeft(currentIndex > 0)
      setCanScrollRight(currentIndex < maxIndex)
      const progress = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 0
      setScrollProgress(progress)
    }
  }

  const scroll = (direction) => {
    if (containerRef.current) {
      const container = containerRef.current
      const cardWidth = container.querySelector('[data-card]')?.offsetWidth || 0
      const gap = 36
      const scrollAmount = cardWidth + gap

      let newIndex = currentIndex + direction
      newIndex = Math.max(0, Math.min(newIndex, maxIndex))
      setCurrentIndex(newIndex)

      container.scrollTo({
        left: newIndex * scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault() // Prevent default vertical scroll behavior
      const container = containerRef.current
      const cardWidth = container.querySelector('[data-card]')?.offsetWidth || 0
      const gap = 36
      const scrollAmount = cardWidth + gap

      const direction = e.deltaX > 0 ? 1 : -1 // Determine scroll direction (right or left)
      let newIndex = currentIndex + direction

      newIndex = Math.max(0, Math.min(newIndex, maxIndex)) // Keep index within bounds

      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex)
        container.scrollTo({
          left: newIndex * scrollAmount,
          behavior: 'smooth',
        })
      }
    }
  }

  // Mouse drag scrolling
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (containerRef.current) {
      const container = containerRef.current
      const cardWidth = container.querySelector('[data-card]')?.offsetWidth || 0
      const gap = 36
      const scrollAmount = cardWidth + gap

      // Snap to nearest card
      const newIndex = Math.round(container.scrollLeft / scrollAmount)
      setCurrentIndex(newIndex)

      container.scrollTo({
        left: newIndex * scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX
    const walk = (x - startX) * 2 // Adjust scroll speed
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp()
    }
  }

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      const maxScroll = scrollWidth - clientWidth

      const cardWidth =
        containerRef.current.querySelector('[data-card]')?.offsetWidth || 0
      const gap = 36
      const scrollAmount = cardWidth + gap

      const newIndex = Math.round(scrollLeft / scrollAmount)
      setCurrentIndex(newIndex)

      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < maxScroll - 1)

      const progress = maxIndex > 0 ? (newIndex / maxIndex) * 100 : 0
      setScrollProgress(Math.min(100, progress))
    }
  }
  useEffect(() => {
    console.log('This is data', data) // Check if data is being fetched correctly
    updateScrollButtons()
  }, [quotes, currentIndex])

  if (loading)
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
  if (error) return <p>{error}</p>
  if (!quotes) return <p>No data available</p>

  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-5">
        <div className="bg-white flex py-3 rounded-md px-6">
          <p className="font-semibold text-lg">Latest Quotations Received</p>
          {/* <span className="text-darkRed flex gap-2 items-center cursor-pointer hover:opacity-80">
            <p className="font-semibold">All quotes</p>
            <span className="w-5 h-5">→</span>
          </span> */}
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex gap-9 overflow-x-hidden scroll-smooth cursor-grab active:cursor-grabbing"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onScroll={handleScroll}
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {/* {Array.isArray(card) && card.map((cardItem, index) => ( */}
            {quotes?.map((quote, index) => (
              // console.log(quote);
              <div
                key={index}
                data-card
                className="flex-none bg-white rounded-md transition-transform duration-300 select-none shadow-md"
                style={{
                  width: `calc((100% - ${
                    (visibleCards - 1) * 36
                  }px) / ${visibleCards})`,
                  scrollSnapAlign: 'start',
                }}
              >
                <div className="p-3 flex items-center justify-between">
                  <span className="flex items-center gap-3">
                    <img src={assets.check_svg} alt="" className="w-6 h-6" />
                    <h2 className="font-bold text-xl text-blackHeading">
                      {quote.quote_number}
                    </h2>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="text-blackHeading">
                      <p className="font-bold text-[11px] text-right">
                        {quote.created_at_date}
                      </p>
                      <p className="font-normal text-[11px] text-right">
                        {quote.created_at_time}
                      </p>
                    </span>
                    <img
                      src={assets.forward_svg}
                      className="w-3 h-3 text-grayIcon1"
                      alt=""
                    />
                  </span>
                </div>
                <hr className="w-full border-grayBorder1" />
                <div className="grid grid-cols-2 gap-4 p-4">
                  <span className="flex flex-col gap-1.5 p-2.5 border-grayBox border-2 rounded-md hover:border-gray-300 transition-colors">
                    <p className="text-xs font-medium text-grayContent">
                      RFQ Number:
                    </p>
                    <h2 className="text-blackHeading text-sm font-semibold">
                      {quote.reference_number}
                    </h2>
                  </span>
                  <span className="flex flex-col gap-1.5 p-2.5 border-grayBox border-2 rounded-md hover:border-gray-300 transition-colors">
                    <p className="text-xs flex gap-1 font-medium text-grayContent">
                      Total Price:
                      <span className="text-[10px]"> (incl. tax)</span>
                    </p>
                    <h2 className="text-RedText font-medium text-sm">
                      {quote.final_amount}
                    </h2>
                  </span>
                  <div className="flex flex-col gap-1.5 p-2.5 border-grayBox border-2 rounded-md hover:border-gray-300 transition-colors">
                    <p className="text-xs font-medium text-grayContent">
                      No. of Products:
                    </p>
                    <span className="text-blackHeading text-sm font-medium">
                      {quote.products_count}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5 p-2.5 border-grayBox border-2 rounded-md hover:border-gray-300 transition-colors">
                    <p className="text-xs font-medium text-grayContent">
                      Expires in:
                    </p>
                    <span className="text-blackHeading text-sm font-medium">
                      {quote['expires in']}
                    </span>
                  </div>
                </div>
                <div className="flex justify-center pb-6">
                  <button className="flex justify-center items-center border-[1px] border-buttonRed px-12 py-2 rounded-md shadow-md hover:bg-red-50 transition-colors">
                    <p className="font-bold text-[15px] text-grayHeading">
                      Order Now
                    </p>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {quotes.length > visibleCards && (
            <div className="flex justify-center items-center gap-6 mt-6">
              <button
                onClick={() => scroll(-1)}
                className={`p-2 rounded-full hover:bg-gray-100 transition-all ${
                  !canScrollLeft
                    ? 'opacity-50 cursor-not-allowed'
                    : 'cursor-pointer'
                }`}
                disabled={!canScrollLeft}
              >
                <img
                  src={assets.leftArrow}
                  className="w-6 h-6"
                  alt="Previous"
                />
              </button>

              <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-darkRed rounded-full transition-all duration-300"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>

              <button
                onClick={() => scroll(1)}
                className={`p-2 rounded-full hover:bg-gray-100 transition-all ${
                  !canScrollRight
                    ? 'opacity-50 cursor-not-allowed'
                    : 'cursor-pointer'
                }`}
                disabled={!canScrollRight}
              >
                <img src={assets.rightArrow} className="w-6 h-6" alt="Next" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuoteSlider
