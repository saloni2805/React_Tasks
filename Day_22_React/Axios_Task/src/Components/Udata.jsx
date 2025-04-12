import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Udata = () => {
  const nav = useNavigate()

  const [data, setData] = useState({
    efirstname: "",
    elastname: "",
    edepartment: "React",
  })

  const dataHandler = (e) => {
    console.log(e)
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Submitedd")
    try {
      const res = await axios.post(`http://localhost:3000/Employees`, data)
      console.log(res.data)
      setData(res.data)
      alert("Data submitted successfuly")
      nav("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div> */}

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
            <div>
              {/* <label htmlFor="email" className="block text-sm/6 font-medium text-blue-400">
                                Email address
                            </label> */}
              <div className="mt-2">
                <input
                  id="efirstname"
                  name="efirstname"
                  type="text"
                  value={data.efirstname}
                  onChange={(e) => dataHandler(e)}
                  placeholder="First Name"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              {/* <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-blue-400">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div> */}
              <div className="mt-2">
                <input
                  id="elastname"
                  name="elastname"
                  type="text"
                  value={data.elastname}
                  onChange={(e) => dataHandler(e)}
                  placeholder="Last Name"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div className="mt-2 ">
                <select
                  className="select block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 "
                  name="edepartment"
                  value={data.edepartment}
                  onChange={(e) => dataHandler(e)}
                >
                  <option disabled={true}>Pick a Department</option>
                  <option value="React">React</option>
                  <option value="Anguler">Anguler</option>
                  <option value="Node">Node</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>

          {/* <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?{' '}
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Start a 14 day free trial
                        </a>
                    </p> */}
        </div>
      </div>
    </>
  )
}

export default Udata
