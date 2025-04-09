import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { addToPastes, updateToPastes } from "../redux/pasteSlice"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const [title, setTitle] = useState("")
  const [value, setValue] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const pasteId = searchParams.get("pasteId")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // For Edit
  const allPastes = useSelector((state) => state.paste.pastes)

  let createPaste = () => {
    if (title && value) {
      let paste = {
        title: title,
        content: value,
        _id: pasteId || Date.now().toString(36),
        createdAt: new Date().toISOString(),
      }
      console.log(paste)

      if (pasteId) {
        // Update
        dispatch(updateToPastes(paste))
        navigate("/pastes")
      } else {
        // Create
        dispatch(addToPastes(paste))
      }

      setTitle("")
      setValue("")
      setSearchParams({})
    }
  }

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId)
      setTitle(paste.title)
      setValue(paste.content)
    }
  }, [pasteId])

  return (
    <div>
      <div className="flex flex-row  gap-7 place-content-between mt-5">
        <input
          className="p-1 pl-4 rounded-2xl mt-2 w-[60%]"
          type="text"
          placeholder="enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="mt-2" onClick={createPaste}>
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>
      <div className="mt-3">
        <textarea
          value={value}
          placeholder="enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
          cols={50}
          className="rounded-2xl mt-4 min-w-[500px] p-4  "
        />
      </div>
    </div>
  )
}

export default Home
