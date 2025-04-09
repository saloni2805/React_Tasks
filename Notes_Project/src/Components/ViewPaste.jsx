import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
// import { addToPastes, updateToPastes } from "../redux/pasteSlice"

const ViewPaste = () => {
  const { id } = useParams()
  const allPastes = useSelector((state) => state.paste.pastes)
  const paste = allPastes.filter((p) => p._id === id)[0]
  console.log(paste.title)

  return (
    <div>
      <div className="flex flex-row  gap-7 place-content-between mt-5">
        <input
          className="p-1 pl-4 rounded-2xl mt-2 w-[60%]"
          type="text"
          placeholder="enter title here"
          value={paste.title}
          disabled
          //   onChange={(e) => setTitle(e.target.value)}
        />
        {/* <button className="mt-2" onClick={createPaste}>
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button> */}
      </div>
      <div className="mt-3">
        <textarea
          value={paste.content}
          placeholder="enter content here"
          //   onChange={(e) => setValue(e.target.value)}
          rows={20}
          cols={50}
          disabled
          className="rounded-2xl mt-4 min-w-[500px] p-4  "
        />
      </div>
    </div>
  )
}

export default ViewPaste
