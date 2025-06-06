import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams, useNavigate } from "react-router-dom"
import { addToPastes, updateToPastes } from "../redux/pasteSlice"
import { Copy } from "lucide-react"
import toast from "react-hot-toast"

const Home = () => {
  const [title, setTitle] = useState("")
  const [value, setValue] = useState("")
  const [errors, setErrors] = useState({ title: "", value: "" })

  const [searchParams, setSearchParams] = useSearchParams()
  const pasteId = searchParams.get("pasteId")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const allPastes = useSelector((state) => state.paste.pastes)

  const validate = () => {
    const newErrors = { title: "", value: "" }
    if (!title.trim()) newErrors.title = "Title is required."
    if (!value.trim()) newErrors.value = "Content cannot be empty."
    setErrors(newErrors)
    console.log(newErrors)
    return !newErrors.title && !newErrors.value
  }

  const createPaste = () => {
    if (!validate()) return

    const paste = {
      title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }

    if (pasteId) {
      dispatch(updateToPastes(paste)) // Dispatched an update action
      navigate("/pastes")
    } else {
      dispatch(addToPastes(paste)) // Dispatched an add action
    }

    setTitle("")
    setValue("")
    setSearchParams({})
    setErrors({ title: "", value: "" })
  }

  useEffect(() => {
    if (pasteId) {
      console.log(allPastes)
      const existing = allPastes.find((p) => p._id === pasteId)
      if (existing) {
        setTitle(existing.title)
        setValue(existing.content)
      }
    }
  }, [pasteId, allPastes])

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        {pasteId ? "Edit Your Note" : "Create a New Note"}
      </h2>

      <div className="mb-4">
        <input
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
            errors.title
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
          type="text"
          placeholder="Enter title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      <div className="relative mb-4">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={12}
          placeholder="Write your note here..."
          className={`w-full p-4 border rounded-md focus:outline-none resize-none ${
            errors.value
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
        />
        {errors.value && (
          <p className="text-red-500 text-sm mt-1">{errors.value}</p>
        )}
        <button
          onClick={() => {
            handleCopy()
            toast.success("Copied to clipboard")
          }}
          title="Copy"
          className="absolute top-2 right-3 text-gray-600 hover:text-gray-800"
        >
          <Copy size={20} />
        </button>
      </div>

      <div className="text-right">
        <button
          onClick={createPaste}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
        >
          {pasteId ? "Update Note" : "Create Note"}
        </button>
      </div>
    </div>
  )
}

export default Home
