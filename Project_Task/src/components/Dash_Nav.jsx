import React, { useState } from "react"
import "../css/Dash_Nav.css"
import { NavLink } from "react-router-dom"
import iconimg from "../assets/iconimg.jpg" // Use your profile image

const DashNav = ({ toggleSidebar }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen)

  return (
    <>
      {" "}
      <div className="container">
        {" "}
        <nav className="navbar navbar-expand-lg navbar-blur fixed-top py-3 px-3">
          <div className="container-fluid d-flex align-items-center gap-2">
            {/* Toggler Button */}
            <button
              className="toggleBtn btn btn-outline-dark m-0"
              onClick={toggleSidebar}
            >
              <i className="bi bi-list"></i>
            </button>

            {/* Search Bar */}
            <form className="flex-grow-1 mx-1 " role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: "200px" }}
              />
            </form>

            {/* Right Icons */}
            <div className="d-flex align-items-center gap-3">
              <div className="position-relative">
                <i className="bi bi-bell fs-4"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  2
                </span>
              </div>

              <div className="dropdown">
                <img
                  src={iconimg}
                  alt="Avatar"
                  className="rounded-circle"
                  height="40"
                  style={{ cursor: "pointer" }}
                  onClick={toggleDropdown}
                />
                {isDropdownOpen && (
                  <div
                    className="dropdown-menu dropdown-menu-end show mt-2 p-2"
                    style={{ minWidth: "220px" }}
                  >
                    <div className="px-3 py-2 border-bottom">
                      <h6 className="mb-0">FreshCart Admin</h6>
                      <small className="text-muted">admindemo@email.com</small>
                    </div>
                    <NavLink className="dropdown-item" to="#">
                      Home
                    </NavLink>
                    <NavLink className="dropdown-item" to="#">
                      Profile
                    </NavLink>
                    <NavLink className="dropdown-item" to="#">
                      Settings
                    </NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item text-danger" to="#">
                      Log Out
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default DashNav
