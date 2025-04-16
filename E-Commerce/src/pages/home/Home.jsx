import React from "react"
import HeroSection from "../../components/heroSection/HeroSection"
// import { useContext } from "react"
// import MyContext from "../../context/data/MyContext"
import Filter from "../../components/filter/Filter"
import ProductCard from "../../components/productcard/ProductCard"
import Testimonial from "../../components/testimonial/Testimonial"
import Track from "../../components/track/Track"
// import { useDispatch } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"
// import { addToCart, deleteFromCart } from "../../redux/cartSlice"

const Home = () => {
  // const dispatch = useDispatch()
  const cartItem = useSelector((state) => state.cart)

  console.log(cartItem)

  // const addCart = () => {
  //   dispatch(addToCart("shirt"))
  // }

  // const deleteCart = () => {
  //   dispatch(deleteFromCart("shirt"))
  // }

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
