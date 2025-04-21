import { createContext, useState, useEffect } from "react"
import axios from "axios"

const MyContext = createContext()

export const MyProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [error, setError] = useState({
    categories: null,
    products: null,
  })

  // Fetch categories
  const getCategories = async () => {
    try {
      setError((prev) => ({ ...prev, categories: null }))
      const response = await axios.get("http://localhost:3000/categories")
      setCategories(response.data)
    } catch (err) {
      setError((prev) => ({ ...prev, categories: err.message }))
      console.error("Error fetching categories:", err)
    }
  }

  // Fetch products
  const getProducts = async () => {
    try {
      setError((prev) => ({ ...prev, products: null }))
      const response = await axios.get("http://localhost:3000/products")
      console.log(response.data)
      setProducts(response.data)
    } catch (err) {
      setError((prev) => ({ ...prev, products: err.message }))
      console.error("Error fetching products:", err)
    }
  }

  // Fetch data on component mount
  useEffect(() => {
    getCategories()
    getProducts()
  }, [])

  const addCategory = async (newCategory) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/categories",
        newCategory
      )
      setCategories((prev) => [...prev, response.data])
      console.log(`Added new category: ${newCategory.name}`)
    } catch (err) {
      console.error("Error adding category:", err)
    }
  }

  const addProduct = async (newProduct) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/products",
        newProduct
      )
      setProducts((prev) => [...prev, response.data])
      console.log(`Added new product: ${newProduct.name}`)
    } catch (err) {
      console.error("Error adding product:", err)
    }
  }

  return (
    <MyContext.Provider
      value={{
        categories,
        products,
        error,
        getCategories,
        getProducts,
        addCategory,
        addProduct,
        setCategories,
        setProducts,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default MyContext
