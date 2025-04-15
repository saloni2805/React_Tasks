import React, { useState, useEffect } from "react"
import MyContext from "./myContext"
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore"
import { fireDB } from "../../firebase/firebaseConfig"
import { toast } from "react-toastify"
// import { useNavigate } from "react-router-dom"

const MyState = ({ children }) => {
  const [mode, setMode] = useState("light")
  const [loading, setLoading] = useState(false)
  // const nav = useNavigate()
  const [products, setProducts] = useState({
    title: "",
    price: "",
    imageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  })
  const [product, setProduct] = useState([])

  // ********************** Add Product Section  **********************
  const addProduct = async () => {
    console.log(
      products.title,
      products.price,
      products.imageUrl,
      products.category,
      products.description
    )
    if (
      products.title == null ||
      products.price == null ||
      products.imageUrl == null ||
      products.category == null ||
      products.description == null
    ) {
      return toast.error("Please fill all fields")
    }
    setLoading(true)
    const productRef = collection(fireDB, "products")
    try {
      await addDoc(productRef, products)
      toast.success("Product Added successfully")
      setTimeout(() => {
        window.location.href = "/dashboard"
      }, 800)
      getProductData()
    } catch (error) {
      console.log(error)
    }
  }

  const getProductData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("time")
        // limit(5)
      )
      const data = onSnapshot(q, (QuerySnapshot) => {
        console.log(QuerySnapshot)
        let productsArray = []
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id })
        })
        setProduct(productsArray)
        setLoading(false)
      })
      return () => data
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "rgb(17, 24, 39)"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }

  useEffect(() => {
    getProductData()
  }, [])

  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        products,
        setProducts,
        addProduct,
        product,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default MyState
