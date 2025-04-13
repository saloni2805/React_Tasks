import React from "react"
import HeroSection from "../../components/heroSection/HeroSection"
// import { useContext } from "react"
// import MyContext from "../../context/data/myContext"
import Filter from "../../components/filter/Filter"
import ProductCard from "../../components/productcard/ProductCard"
import Testimonial from "../../components/testimonial/Testimonial"
import Track from "../../components/track/Track"

const Home = () => {
  // const context = useContext(MyContext)
  // const { name, age } = context

  return (
    <>
      {" "}
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
    </>
  )
}

export default Home
