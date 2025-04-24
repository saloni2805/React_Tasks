import React from "react"
import carousel1 from "../assets/carousel1.jpg"
import carousel2 from "../assets/carousel2.jpg"
import carousel3 from "../assets/carousel3.jpg"
import "../css/Carousel.css"

const Carousel = () => {
  return (
    <div
      id="customCarousel"
      className="carousel slide mt-4 carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={carousel1}
            className="d-block w-100 carousel-img"
            alt="Slide 1"
          />
          <div className="carousel-caption d-none d-md-block text-start custom-caption">
            <h1>Midnight Munch Combo</h1>
            <p>
              Snack on late-night munchies of delicious nuts & you’re guaranteed
              happiness before you doze!
            </p>
            <a href="#" className="btn btn-dark">
              Shop Now
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={carousel2}
            className="d-block w-100 carousel-img"
            alt="Slide 2"
          />
          <div className="carousel-caption d-none d-md-block text-start custom-caption">
            <h1>Delicious Deals</h1>
            <p>Grab amazing offers on snacks, beverages and more!</p>
            <a href="#" className="btn btn-success">
              Discover
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={carousel3}
            className="d-block w-100 carousel-img"
            alt="Slide 3"
          />
          <div className="carousel-caption d-none d-md-block text-start custom-caption">
            <h1>Fresh & Tasty</h1>
            <p>Always fresh, always on time. Explore our tasty treats!</p>
            <a href="#" className="btn btn-primary">
              Order Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
