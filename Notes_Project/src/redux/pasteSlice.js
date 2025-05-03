import { createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
}

export const pasteSlice = createSlice({
  name: "pastes",
  initialState,
  reducers: {
    // ---- Addition ----
    addToPastes: (state, action) => {
      // Add a check-> Paste already exist vala check
      const paste = action.payload
      state.pastes.push(paste)
      localStorage.setItem("pastes", JSON.stringify(state.pastes)) // Converts object into string
      toast.success("Paste created successfuly")
    },
    // ---- Updation ----
    updateToPastes: (state, action) => {
      console.log(action)
      const paste = action.payload
      let index = state.pastes.findIndex((item) => item._id === paste._id)
      console.log(index)

      if (index >= 0) {
        state.pastes[index] = paste
        localStorage.setItem("pastes", JSON.stringify(state.pastes))
      }
      toast.success("Paste updated successfuly")
    },
    // ---- Reset ----
    resetAllPastes: (state) => {
      state.pastes = []
      localStorage.removeItem("pastes")
    },
    // ---- Remove ---
    removeFromPastes: (state, action) => {
      const pasteId = action.payload
      state.pastes = state.pastes.filter((item) => item._id !== pasteId)
      localStorage.setItem("pastes", JSON.stringify(state.pastes))
      toast.success("Paste deleted successfuly")
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } =
  pasteSlice.actions

export default pasteSlice.reducer
