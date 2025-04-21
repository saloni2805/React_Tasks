import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { FaBell, FaUser, FaBox, FaShoppingCart } from "react-icons/fa"
import logo2 from "../assets/logo2.ico"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      {/* Top Header */}
      <div className="bg-light py-1 ">
        <div className="container d-flex justify-content-between small">
          <div className="d-flex gap-3">
            <span>USD $</span>
            <span>English</span>
          </div>
          <div className="d-none d-md-flex gap-4">
            <NavLink to="#" className="text-decoration-none text-muted">
              Support
            </NavLink>
            <NavLink to="#" className="text-decoration-none text-muted">
              Delivery
            </NavLink>
            <NavLink to="#" className="text-decoration-none text-muted">
              Warranty
            </NavLink>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg container py-3 d-flex align-items-center justify-content-between flex-wrap">
        <NavLink
          className="navbar-brand d-flex align-items-center fw-bold fs-4 text-dark"
          to="#"
        >
          <img src={logo2} alt="FreshCart Logo" height="30" className="me-2" />
          FreshCart
        </NavLink>

        <button
          className="navbar-toggler ms-auto d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Search Bar */}
        <div
          className="input-group d-flex justify-content-center align-items-center mx-lg-5 my-3 my-lg-3 flex-grow-1 mx-3"
          style={{ maxWidth: "600px" }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Search for products"
          />
          <button className="btn btn-success">Search</button>
        </div>

        <div
          className="collapse navbar-collapse mb-2 flex-grow-0 d-flex justify-content-center align-items-center"
          id="mainNavbar"
        >
          <div className="d-flex align-items-center gap-4 flex-wrap justify-content-center mt-3 mt-lg-0 ms-lg-auto">
            <div className="position-relative text-center">
              <FaBell size={18} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1
              </span>
              <div className="small">Notification</div>
            </div>
            <div className="text-center">
              <FaUser size={18} />
              <div className="small">Sign up</div>
            </div>
            <div className="text-center">
              <FaBox size={18} />
              <div className="small">My Orders</div>
            </div>
            <div className="text-center">
              <FaShoppingCart size={18} />
              <div className="small">Shopping Cart</div>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Nav */}
      <div className="container py-1 px-0">
        <ul className="nav gap-3 flex-wrap justify-content-start">
          {/* All Categories with submenus */}
          <li className="nav-item dropdown fw-semibold d-flex align-items-center position-relative">
            <NavLink
              className="nav-link dropdown-toggle p-0 fw-semibold text-black fs-6"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="me-2 bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 4h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              All Categories
            </NavLink>
            <ul className="dropdown-menu mt-2">
              <li className="dropdown-submenu position-relative">
                <NavLink className="dropdown-item dropdown-toggle" to="#">
                  Electronics
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Mobiles
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Laptops
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown-submenu position-relative">
                <NavLink className="dropdown-item dropdown-toggle" to="#">
                  Fashion
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Men
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Women
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink className="dropdown-item" to="#">
                  Groceries
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Other menu items with dropdowns */}
          {["Home", "Shop", "Stores", "Mega menu", "Pages", "Account"].map(
            (item, idx) => (
              <li className="nav-item dropdown" key={idx}>
                <NavLink
                  className="nav-link dropdown-toggle p-0 text-black fs-6"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  {item}
                </NavLink>
                <ul className="dropdown-menu mt-2">
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      {item} Option 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      {item} Option 2
                    </NavLink>
                  </li>
                </ul>
              </li>
            )
          )}

          {/* Dashboard and Docs - plain links */}
          <li className="nav-item">
            <NavLink className="nav-link p-0 text-black fs-6" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link p-0 text-black fs-6" to="#">
              Docs
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
