import { useState, useEffect } from "react"
import "./App.css"
import CustomizedTables from "./Table"
import useService from "./useService"

function App() {
  const [data, setData] = useState([])
  const { getDataService } = useService()

  // const getData = () => {
  //   fetch('https://reqres.in/api/users?page=2')
  //     .then(response => response.json())
  //     .then(data => setData(data.data))
  // }

  const getData = async () => {
    try {
      const response = await getDataService()
      setData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <h1 align="center">Fetching data from API</h1>

      {<CustomizedTables data={data} />}
    </>
  )
}

export default App
