import React from "react"
import Navbar from "../../components/NavBar"
import Carousel from "../../components/carousel"
import Categories from "../../components/Categories"
import NewArraival from "../../components/NewArraival"
import DealsOfTheDay from "../../components/DealsOfTheDay"
import Testmonials from "../../components/Testmonials"
import Rules from "../../components/Rules"
import FirstUser from "../../components/FirstUser"
import NewProducts from "../../components/NewProducts"
import Footer from "../../components/Footer"

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="container mt-4  ">
        <div className="row">
          <div className="col-md-3 pe-1">
            <div className="fluid">
              <div className="column">
                <div className=" row d-md-flex d-none">
                  {" "}
                  <Categories />
                  <Rules />
                  <Testmonials />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="fluid">
              <div className="column">
                <NewArraival />
                <DealsOfTheDay />
                <FirstUser />
                <NewProducts />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
