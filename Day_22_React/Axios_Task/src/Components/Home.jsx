import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Edit, Trash2 } from 'lucide-react' // Import icons
import { NavLink } from 'react-router-dom'

const Home = () => {
    const [data, setData] = useState([])

    // ----------- Get -------------
    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:3000/Employees/')
            setData(res.data)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    // ------------ Delete -----------
    const handleDelete = async (id) => {
        console.log("Delete button clicked")
        const confirmation = window.confirm('Are you sure you want to delete?')
        if (confirmation) {
            try {
                await axios.delete(`http://localhost:3000/Employees/${id}`)
                setData(data.filter((item) => item.id !== id))
                alert('Data Deleted Successfuly')
            } catch (error) {
                console.error('Error in deleteing Employee : ', error)
            }
        }

    }

    return (
        <>
            <div className="overflow-x-auto my-4 mx-4 rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Department</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val) => (
                            <tr key={val.id}>
                                <th>{val.id}</th>
                                <td>{val.efirstname}</td>
                                <td>{val.elastname}</td>
                                <td>{val.edepartment}</td>
                                <td>

                                    <button className="mr-3 text-blue-500 hover:text-blue-700">
                                        <NavLink to={`editdata/${val.id}`} >
                                            <Edit size={19} />
                                        </NavLink>
                                    </button>


                                    <button onClick={() => handleDelete(val.id)} className="text-red-500 hover:text-red-700">
                                        <Trash2 size={19} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div></>
    )
}

export default Home