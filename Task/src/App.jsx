import { useState } from "react"
// import "./App.css"
import axios from "axios"
import { useEffect } from "react"

function App() {
  const [data, setData] = useState([])

  // const getData = async () => {
  //   await fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.products))
  // }

  // const getData = async () => {
  //   const res = await fetch("https://dummyjson.com/products")
  //   const data = await res.json()
  //   setData(data.products)
  // }

  // const getData = async () => {
  //   const res = await axios.get("https://dummyjson.com/products")
  //   setData(res.data.products)
  // }

  const getData = async () => {
    const res = await axios.get("https://dummyjson.com/products")
    const data = await res.data
    setData(data.products)
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(data)

  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </>
  )
}

export default App
