import React, { useState } from "react"
import "../css/Sidebar.css"
import logo2 from "../assets/logo2.ico"
import { NavLink } from "react-router-dom"
// import MainContent from "./MainContent"
import DashNav from "./Dash_Nav"
import { Outlet } from "react-router-dom"

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isOrdersOpen, setIsOrdersOpen] = useState(false)
  const [isMenuLevelOpen, setIsMenuLevelOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Hamburger Menu for Tablet/Mobile */}
      {/* <button
        className="btn btn-outline-primary d-lg-none m-2"
        onClick={toggleSidebar}
      >
        <i className="bi bi-list"></i>
      </button> */}

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        {/* Close Button (only visible on tablet/mobile) */}
        <div className="d-flex justify-content-end d-lg-none">
          <button
            className="btn-close mb-1"
            aria-label="Close"
            onClick={toggleSidebar}
          ></button>
        </div>
        {/* Logo */}
        <div className="d-flex mb-3 justify-content-start align-items-center">
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

        {/* Main Links */}
        <div className="nav flex-column">
          <NavLink
            className="nav-link active"
            style={{
              backgroundColor: "#d1fadf",
              color: "#198754",
              fontWeight: "bold",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "15px",
            }}
            to="/dashboard"
          >
            <i className="bi bi-house me-2"></i> Dashboard
          </NavLink>
        </div>

        {/* Store Management */}
        <div className="section-title">Store Managements</div>
        <div className="nav flex-column">
          <NavLink
            className="nav-link text-secondary fw-semibold"
            to="/dashboard/products"
            style={{ cursor: "pointer", fontSize: "15px" }}
          >
            <i className="bi bi-cart me-2"></i> Products
          </NavLink>
          <NavLink
            className="nav-link text-secondary fw-semibold"
            to="/dashboard/categories"
            style={{ cursor: "pointer", fontSize: "15px" }}
          >
            <i className="bi bi-list-ul me-2"></i> Categories
          </NavLink>

          {/* Orders collapsible */}
          <div
            className="nav-link d-flex justify-content-between align-items-center text-secondary fw-semibold"
            onClick={() => setIsOrdersOpen(!isOrdersOpen)}
            style={{ cursor: "pointer", fontSize: "15px" }}
          >
            <span>
              <i className="bi bi-bag me-2"></i> Orders
            </span>
            <i
              className={`bi ${
                isOrdersOpen ? "bi-chevron-up" : "bi-chevron-down"
              } small`}
            ></i>
          </div>
          {isOrdersOpen && (
            <div className="ps-4 ">
              <NavLink className="nav-link text-secondary fw-semibold" to="#">
                List
              </NavLink>
              <NavLink className="nav-link text-secondary fw-semibold" to="#">
                Single
              </NavLink>
            </div>
          )}

          <NavLink
            className="nav-link text-secondary fw-semibold"
            to="#"
            style={{ cursor: "pointer", fontSize: "15px" }}
          >
            <i className="bi bi-shop me-2"></i> Sellers / Vendors
          </NavLink>
          <NavLink
            className="nav-link text-secondary fw-semibold"
            to="#"
            style={{ cursor: "pointer", fontSize: "15px" }}
          >
            <i className="bi bi-people me-2"></i> Customers
          </NavLink>
          <NavLink
            className="nav-link text-secondary fw-semibold"
            to="#"
            style={{ cursor: "pointer", fontSize: "15px" }}
          >
            <i className="bi bi-star me-2"></i> Reviews
          </NavLink>

          {/* Menu Level collapsible */}
          <div
            className="nav-link d-flex justify-content-between align-items-center text-secondary fw-semibold"
            onClick={() => setIsMenuLevelOpen(!isMenuLevelOpen)}
            style={{ cursor: "pointer", fontSize: "15px" }}
          >
            <span>
              <i className="bi bi-chevron-double-down me-2 "></i> Menu Level
            </span>
            <i
              className={`bi ${
                isMenuLevelOpen ? "bi-chevron-up" : "bi-chevron-down"
              } small`}
            ></i>
          </div>
          {isMenuLevelOpen && (
            <div className="ps-4">
              <NavLink className="nav-link text-secondary fw-semibold" to="#">
                Submenu 1
              </NavLink>
              <NavLink className="nav-link text-secondary fw-semibold" to="#">
                Submenu 2
              </NavLink>
            </div>
          )}
        </div>

        {/* Site Settings */}
        <div className="section-title">
          Site Settings{" "}
          <span className="badge bg-primary badge-small ms-1">Coming Soon</span>
        </div>
        <div className="nav flex-column">
          <NavLink className="nav-link disabled" to="#">
            <i className="bi bi-journal-text me-2"></i> Blog
          </NavLink>
          <NavLink className="nav-link disabled" to="#">
            <i className="bi bi-images me-2"></i> Media
          </NavLink>
          <NavLink className="nav-link disabled" to="#">
            <i className="bi bi-gear me-2"></i> Store Settings
          </NavLink>
        </div>

        {/* Support */}
        <div className="section-title">
          Support{" "}
          <span className="badge bg-primary badge-small ms-1">Coming Soon</span>
        </div>
        <div className="nav flex-column">
          <NavLink className="nav-link disabled" to="#">
            <i className="bi bi-life-preserver me-2"></i> Support Ticket
          </NavLink>
          <NavLink className="nav-link disabled" to="#">
            <i className="bi bi-question-circle me-2"></i> Help Center
          </NavLink>
          <NavLink className="nav-link disabled" to="#">
            <i className="bi bi-infinity me-2"></i> How FreshCart Works
          </NavLink>
        </div>

        {/* Our Apps */}
        <div className="section-title">Our Apps</div>
        <div className="nav flex-column">
          <NavLink className="nav-link disabled" to="#">
            <i className="bi bi-apple me-2"></i> Apple Store
          </NavLink>
          <NavLink className="nav-link disabled" to="#">
            <i className="bi bi-google-play me-2"></i> Google Play
          </NavLink>
        </div>
      </div>

      {/* Main Content */}
      <div className="content">
        <DashNav toggleSidebar={toggleSidebar} />
        <Outlet />
      </div>
    </>
  )
}

export default Sidebar
