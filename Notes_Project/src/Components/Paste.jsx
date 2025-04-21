import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeFromPastes } from "../redux/pasteSlice"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"
import { Eye, Pencil, Trash2, Copy, Share2, Calendar } from "lucide-react"

const Paste = () => {
  const [searchText, setSearchText] = useState("")
  const pastes = useSelector((state) => state.paste.pastes)
  const dispatch = useDispatch()

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchText.toLowerCase())
  )
  console.log("data", filterData)

  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId))
  }

  const handleShare = (paste) => {
    if (navigator.share) {
      navigator
        .share({
          title: paste.title,
          text: paste.content,
          url: window.location.origin + `/pastes/${paste._id}`,
        })
        .then(() => toast.success("Paste shared!"))
        .catch((error) => {
          console.log(error)
          toast.error("Sharing failed")
        })
    } else {
      toast.error("Sharing not supported on this device")
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <input
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search by title..."
      />

      <div className="mt-6 flex flex-col gap-6">
        {filterData.length > 0 ? (
          filterData.map((paste) => (
            <div
              key={paste._id}
              className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition relative"
            >
              {/* Created at Date in Top Right */}
              <div className="absolute top-2 right-3 flex items-center text-xs text-gray-400">
                <Calendar size={16} className="mr-1" />
                {new Date(paste.createdAt).toLocaleString()}
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {paste.title}
                </h2>
                <p className="text-gray-600 whitespace-pre-wrap">
                  {paste.content}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm items-center">
                <Link
                  to={`/?pasteId=${paste._id}`}
                  title="Edit"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Pencil size={20} />
                </Link>

                <Link
                  to={`/pastes/${paste._id}`}
                  title="View"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Eye size={20} />
                </Link>

                <button
                  onClick={() => handleDelete(paste._id)}
                  title="Delete"
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(paste.content)
                    toast.success("Copied to clipboard")
                  }}
                  title="Copy"
                  className="text-green-600 hover:text-green-800"
                >
                  <Copy size={20} />
                </button>

                <button
                  onClick={() => handleShare(paste)}
                  title="Share"
                  className="text-purple-600 hover:text-purple-800"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No pastes found.</p>
        )}
      </div>
    </div>
  )
}

export default Paste
