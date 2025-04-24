import React, { useState, useEffect, useRef, useContext } from "react"
import { Button } from "react-bootstrap"
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons"
import MyContext from "../context/MyProvider"
import ProductCard from "./ProductCard"

const NewArrivals = () => {
  const { products } = useContext(MyContext)
  console.log(products.data)

  // const products = [
  //   {
  //     name: "Cadbury 5 Star Chocolate",
  //     originalPrice: "$35",
  //     discountedPrice: "$35",
  //     rating: 4.3,
  //     discount: "40%",
  //     isStar: true,
  //   },
  //   {
  //     name: "Blueberry Greek Yogurt",
  //     originalPrice: "$24",
  //     discountedPrice: "$14.4",
  //     rating: 4.3,
  //     discount: "0%",
  //   },
  //   {
  //     name: "Britannia Cheese Slices",
  //     originalPrice: "$24",
  //     discountedPrice: "$24",
  //     rating: 4.3,
  //     discount: "0%",
  //   },
  //   {
  //     name: "NutriChoice Digestive",
  //     originalPrice: "$24",
  //     discountedPrice: "$24",
  //     rating: 4.3,
  //     discount: "0%",
  //   },
  //   {
  //     name: "Hershey's Chocolate Bar",
  //     originalPrice: "$28",
  //     discountedPrice: "$22",
  //     rating: 4.5,
  //     discount: "20%",
  //   },
  //   {
  //     name: "Strawberry Yogurt",
  //     originalPrice: "$18",
  //     discountedPrice: "$15",
  //     rating: 4.2,
  //     discount: "15%",
  //   },
  // ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const productsPerPage = 4
  const autoPlayRef = useRef(null)
  const carouselRef = useRef(null)

  // Auto-play configuration
  const autoPlayDelay = 3000 // 3 seconds

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? products.length - productsPerPage : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= products.length - productsPerPage ? 0 : prev + 1
    )
  }

  // Auto-play effect
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      if (!isHovered) {
        handleNext()
      }
    }, autoPlayDelay)

    return () => clearInterval(autoPlayRef.current)
  }, [isHovered])

  return (
    <>
      <div
        className="container m-0 p-1 position-relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="d-flex justify-content-between align-items-center mb-0">
          <h4 className="fw-bold mt-2 p-2">New Arrivals</h4>

          <div>
            <Button
              variant="outline-secondary text-secondary bg-opacity-25 rounded-5 bg-secondary"
              onClick={handlePrev}
              className="me-2"
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline-secondary text-secondary bg-opacity-25 rounded-5 bg-secondary"
              onClick={handleNext}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>

        <div className="position-relative overflow-hidden" ref={carouselRef}>
          <div
            className="d-flex transition-all"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / productsPerPage)
              }%)`,
              transition: "transform 0.5s ease-in-out",
              width: `${(products.length / productsPerPage) * 100}%`,
            }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                style={{
                  flex: `0 0 ${100 / productsPerPage}%`,
                  maxWidth: `${100 / productsPerPage}%`,
                  padding: "0 5px", // Adds some spacing between items
                }}
              >
                {" "}
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default NewArrivals
