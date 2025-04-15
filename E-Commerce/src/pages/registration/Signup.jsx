import { createUserWithEmailAndPassword } from "firebase/auth"
import { Link } from "react-router-dom"
import { auth, fireDB } from "../../firebase/firebaseConfig"
import { useContext, useState } from "react"
import MyContext from "../../context/data/myContext"
import { toast } from "react-toastify"
import Loader from "../../components/loader/Loader"
import { addDoc, collection, Timestamp } from "firebase/firestore"

function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const context = useContext(MyContext)
  const { loading, setLoading } = context

  const signup = async () => {
    setLoading(true)
    if (name === "" || email === "" || password === "") {
      return toast.error("All fields are required")
    }
    try {
      //using bellow line you are authenticating user
      const users = await createUserWithEmailAndPassword(auth, email, password)
      console.log(users)

      // Passing data to db in form of object
      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      }

      // user reference
      const userRef = collection(fireDB, "users")
      // calling addDoc method and passing user reference with user data
      await addDoc(userRef, user)

      toast.success("Signup Succesfully")

      setName("")
      setEmail("")
      setPassword("")
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <div className=" flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Signup
          </h1>
        </div>
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="name"
          />
        </div>
        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button
            onClick={signup}
            className=" bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg"
          >
            Signup
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Have an account{" "}
            <Link className=" text-red-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Signup
