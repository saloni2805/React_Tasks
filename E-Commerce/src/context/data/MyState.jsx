import React, { useState, useEffect } from "react"
import MyContext from "./MyContext"
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  Timestamp,
} from "firebase/firestore"
import { fireDB } from "../../firebase/FirebaseConfig"
import { toast } from "react-toastify"

const MyState = ({ children }) => {
  const [searchkey, setSearchkey] = useState("")
  const [filterType, setFilterType] = useState("")
  const [filterPrice, setFilterPrice] = useState("")
  const [mode, setMode] = useState("light")
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState([])
  const [order, setOrder] = useState([])
  const [user, setUser] = useState([])
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

  // ********************** Add Product Section  **********************
  const addProduct = async () => {
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
        console.log("productsArray", productsArray)
        setLoading(false)
      })
      return () => data
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  // Update Product Function
  const edithandle = (item) => {
    setProducts(item)
  }

  const updateProduct = async () => {
    setLoading(true)
    try {
      await setDoc(doc(fireDB, "products", products.id), products)
      toast.success("Product updated successfully")
      setTimeout(() => {
        window.location.href = "/dashboard"
      }, 800)
      getProductData()
      window.location.href = "/dashboard"
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  // Delete Product Function
  const deleteProduct = async (item) => {
    setLoading(true)
    try {
      await deleteDoc(doc(fireDB, "products", item.id))
      toast.success("Product deleted successfully")
      getProductData()
      window.location.href = "/dashboard"
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "orders"))
      const ordersArray = []
      result.forEach((doc) => {
        ordersArray.push(doc.data())
        setLoading(false)
      })
      setOrder(ordersArray)
      console.log(ordersArray)
      setLoading(false)
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

  const getUserData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "users"))
      const usersArray = []
      result.forEach((doc) => {
        usersArray.push(doc.data())
        setLoading(false)
      })
      setUser(usersArray)
      console.log(usersArray)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductData()
    getOrderData()
    getUserData()
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
        updateProduct,
        edithandle,
        deleteProduct,
        order,
        user,
        searchkey,
        setSearchkey,
        filterType,
        setFilterType,
        filterPrice,
        setFilterPrice,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default MyState
