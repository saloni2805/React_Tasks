import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="w-full bg-white shadow-sm py-4">
      <div className="max-w-4xl mx-auto flex justify-center gap-8 text-gray-700 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "hover:text-blue-600 transition"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/pastes"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "hover:text-blue-600 transition"
          }
        >
          Pastes
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar
