import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeFromPastes } from "../redux/pasteSlice"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"

const Paste = () => {
  const [searchText, setSearchText] = useState("")
  const pastes = useSelector((state) => state.paste.pastes)
  const dispatch = useDispatch()

  console.log("Pastes List", pastes)

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchText.toLowerCase())
  )

  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId))
  }

  return (
    <div>
      <input
        className="p-3 pl-4 rounded-2xl min-w-[600px] mt-5"
        type="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search title"
      />
      <div className="flex flex-col gap-5 mt-5">
        {filterData.length > 0 &&
          filterData.map((paste) => {
            return (
              <div key={paste?._id} className="border">
                <h2 className="text-2xl font-bold my-2">{paste.title}</h2>
                <p className="text-lg my-2">{paste.content}</p>
                <div className="flex flex-row gap-4 place-content-evenly my-2">
                  <button>
                    <Link to={`/?pasteId=${paste?._id}`}>Edit</Link>
                  </button>
                  <button>
                    {" "}
                    <Link to={`/pastes/${paste?._id}`}>View</Link>
                  </button>
                  <button onClick={() => handleDelete(paste?._id)}>
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content)
                      toast.success("copied to clipboard")
                    }}
                  >
                    Copy
                  </button>
                  {/* Share button logic */}
                  <button>Share</button>
                </div>
                <div className="my-2">{paste.createdAt}</div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Paste
