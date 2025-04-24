import React, { useContext, useEffect, useState } from "react"
import MyContext from "../context/MyProvider"

const DealsOfTheDay = () => {
  const { products } = useContext(MyContext)
  const firstProduct = products?.[0]

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set your countdown deadline (e.g., 1 day from now)
    const countdownDate = new Date().getTime() + 24 * 60 * 60 * 1000

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now

      if (distance <= 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!firstProduct) return null

  const renderRatingStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`}>★</span>)
    }

    if (hasHalfStar) {
      stars.push(<span key="half">☆</span>)
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`}>☆</span>)
    }

    return (
      <div className="text-warning">
        {stars}{" "}
        <span
          className="text-secondary fw-semibold"
          style={{ fontSize: "14px" }}
        >
          {rating.toFixed(1)}
        </span>
      </div>
    )
  }

  return (
    <div className="container p-1 position-relative">
      <div className="mt-4">
        <h4 className="fw-bold">Deal of the day</h4>
        <h6 className="text-secondary">
          Brings to users an array of discounts on a variety
        </h6>
      </div>

      <div className="mt-4">
        <div className="border rounded-2 border-danger p-3">
          <div className="row align-items-center">
            {/* Product Image */}
            <div className="col-md-5 text-center">
              <img
                src={firstProduct.productImage.replace("../public", "")}
                alt={firstProduct.title}
                className="img-fluid rounded-2"
                style={{ maxHeight: "250px", objectFit: "contain" }}
              />
            </div>

            {/* Product Info */}
            <div className="col-md-7">
              <div className="mb-2">
                {renderRatingStars(firstProduct.rating)}
              </div>
              <h5 className="fs-5">{firstProduct.title}</h5>
              {/* <p className="text-muted small">
                {firstProduct.productDescription}
              </p> */}

              {/* Price */}
              <div className="my-2">
                <span className="fw-bold fs-5 ">₹{firstProduct.salePrice}</span>
                <span className="text-muted ms-2 text-decoration-line-through">
                  ₹{firstProduct.regularPrice}
                </span>
              </div>

              {/* Add to Cart Button */}
              <button className="btn btn-success my-2">+ Add to cart</button>

              {/* Progress */}
              <div className="my-2 d-flex justify-content-between">
                <small className="text-muted">
                  Already Sold: <strong>45</strong>
                </small>

                <div className=" text-muted">
                  <small>
                    Available: <strong>10</strong>
                  </small>
                </div>
              </div>
              <div className="progress my-1" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "80%" }}
                />
              </div>

              {/* Timer */}
              <div className=" mt-4">Hurry up offer ends soon</div>
              <div className="d-flex gap-2 mt-2">
                <div className="border p-2 rounded text-center">
                  <strong>{timeLeft.days}</strong>
                  <br />
                  Days
                </div>
                <div className="border p-2 rounded text-center">
                  <strong>{timeLeft.hours}</strong>
                  <br />
                  Hours
                </div>
                <div className="border p-2 rounded text-center">
                  <strong>{timeLeft.minutes}</strong>
                  <br />
                  Mins
                </div>
                <div className="border p-2 rounded text-center">
                  <strong>{timeLeft.seconds}</strong>
                  <br />
                  Sec
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DealsOfTheDay
