import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const ViewPaste = () => {
  const { id } = useParams()
  const allPastes = useSelector((state) => state.paste.pastes)
  const paste = allPastes.find((p) => p._id === id)

  if (!paste) {
    return (
      <div className="max-w-xl mx-auto mt-10 text-center text-gray-500">
        Paste not found.
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={paste.title}
          disabled
          className="p-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-800 font-semibold"
        />

        <textarea
          value={paste.content}
          disabled
          rows={15}
          className="rounded-lg border border-gray-300 bg-gray-100 p-4 text-gray-700 whitespace-pre-wrap resize-none"
        />

        <p className="text-xs text-gray-400 mt-1">
          Created at: {new Date(paste.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  )
}

export default ViewPaste
