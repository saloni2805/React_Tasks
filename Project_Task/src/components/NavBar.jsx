import React, { useState } from "react"
// import "./Navbar.css" // optional for custom styling
import Offcanvas from "react-bootstrap/Offcanvas"
import {
  FaBars,
  FaBell,
  FaUserAlt,
  FaUser,
  FaShoppingCart,
  FaBox,
  FaSlidersH,
} from "react-icons/fa"
import logo2 from "../assets/logo2.ico"
import { Container, Form, FormControl, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Categories from "./Categories"
import Rules from "./Rules"
import Testmonials from "./Testmonials"

const Navbar = () => {
  const [showMenuDrawer, setShowMenuDrawer] = useState(false)
  const [showCartDrawer, setShowCartDrawer] = useState(false)
  const [showFilterDrawer, setShowFilterDrawer] = useState(false)

  return (
    <>
      {/* Top Navbar */}

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

      {/* <nav className="navbar navbar-expand-lg bg-white border-bottom  d-md-flex justify-content-between align-items-center p-3">
        <div className="d-flex align-items-center">
          <img src="/logo.svg" alt="Logo" height="40" />
          <Form className="d-flex ms-3">
            <FormControl
              type="search"
              placeholder="Search for products"
              className="me-2"
            />
            <Button variant="success">Search</Button>
          </Form>
        </div>
        <div className="d-flex align-items-center d-none gap-4">
          <span>Notification</span>
          <span>Sign up</span>
          <span>My Orders</span>
          <span>Shopping Cart</span>
        </div>
      </nav> */}

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg py-3 container">
        <div className="row w-100 align-items-center justify-content-between ">
          {/* Brand Logo */}
          <div className="col-lg-2 col-md-6 col-sm-12 d-flex py-2 justify-content-center align-items-center ">
            <NavLink
              className="navbar-brand d-flex align-items-center fw-bold fs-4 text-dark"
              to="#"
            >
              <img
                src={logo2}
                alt="FreshCart Logo"
                height="30"
                className="me-2"
              />
              FreshCart
            </NavLink>
          </div>

          {/* Search Bar */}
          <div className="d-flex justify-content-center align-items-center col-12 col-lg-6 col-md-6 py-2 ">
            <div className="input-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Search for products"
              />
              <button className="btn btn-success">Search</button>
            </div>
          </div>

          {/* Icons */}
          <div className="col-12 col-lg-4 col-md-12 d-none d-md-flex py-2 justify-content-center gap-4 ">
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
      <div className="container py-1 px-0 d-md-flex d-none">
        <ul className="nav gap-3 flex-wrap justify-content-start">
          {/* All Categories with submenus */}
          <li className="nav-item dropdown fw-semibold d-flex align-items-center position-relative">
            <NavLink
              className="nav-link dropdown-toggle p-0 fw-semibold text-black"
              style={{ fontSize: "16px" }}
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
                <NavLink
                  className="dropdown-item dropdown-toggle"
                  to="#"
                  style={{ fontSize: "16px" }}
                >
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
                  className="nav-link dropdown-toggle p-0 text-black "
                  style={{ fontSize: "15px" }}
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
            <NavLink
              className="nav-link p-0 text-black"
              style={{ fontSize: "15px" }}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link p-0 text-black "
              style={{ fontSize: "15px" }}
              to="#"
            >
              Docs
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Bottom Sticky Navbar for Mobile */}
      <div className="d-md-none d-flex justify-content-around align-items-center fixed-bottom bg-white shadow p-2 border-top">
        <button className="btn" onClick={() => setShowMenuDrawer(true)}>
          <FaBars size={20} />
        </button>
        <button className="btn">
          <FaBell size={20} />
        </button>
        <button className="btn">
          <FaUserAlt size={20} />
        </button>
        <button className="btn" onClick={() => setShowCartDrawer(true)}>
          <FaShoppingCart size={20} />
        </button>
        <button className="btn" onClick={() => setShowFilterDrawer(true)}>
          <FaSlidersH size={20} />
        </button>
      </div>

      {/* Left Drawer: Menu */}
      <Offcanvas
        show={showMenuDrawer}
        onHide={() => setShowMenuDrawer(false)}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled">
            {["Home", "Shop", "Stores", "Mega menu", "Pages", "Account"].map(
              (item, idx) => (
                <li key={idx} className="mb-2">
                  <button
                    className="btn w-100 text-start d-flex justify-content-between align-items-center"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${item.replace(" ", "")}`}
                    aria-expanded="false"
                    aria-controls={`collapse${item.replace(" ", "")}`}
                  >
                    {item}
                    <span className="ms-auto">&#9662;</span> {/* Down Arrow */}
                  </button>
                  <div
                    className="collapse ps-3"
                    id={`collapse${item.replace(" ", "")}`}
                  >
                    <ul className="list-unstyled mt-2">
                      <li>
                        <NavLink
                          to="#"
                          className="text-decoration-none text-dark"
                        >
                          {item} Option 1
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="#"
                          className="text-decoration-none text-dark"
                        >
                          {item} Option 2
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
              )
            )}
            {/* Dashboard and Docs without collapse */}
            <li className="mt-3">
              <NavLink
                to="/dashboard"
                className="text-decoration-none text-dark d-block py-1"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className="text-decoration-none text-dark d-block py-1"
              >
                Docs
              </NavLink>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Right Drawer: Cart */}
      <Offcanvas
        show={showCartDrawer}
        onHide={() => setShowCartDrawer(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Cart content */}
          <p>Your cart is empty.</p>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Right Drawer: Filters/Testimonial */}
      <Offcanvas
        show={showFilterDrawer}
        onHide={() => setShowFilterDrawer(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter & Testimonials</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Filter content */}
          <Categories />
          <Rules />
          <Testmonials />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Navbar
