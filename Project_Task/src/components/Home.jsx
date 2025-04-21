import React from "react"
import Navbar from "./NavBar"
import Carousel from "./carousel"
import Categories from "./Categories"
import NewArraival from "./NewArraival"
import DealsOfTheDay from "./DealsOfTheDay"
import Testmonials from "./Testmonials"

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="container mt-4 mx-5">
        <div className="row">
          <div className="col-3">
            <div className="container">
              <div className="column">
                <Categories />
                <Testmonials />
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="container">
              <div className="column">
                <NewArraival />
                <DealsOfTheDay />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
