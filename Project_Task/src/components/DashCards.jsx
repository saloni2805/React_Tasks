import React from "react"
import { FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa"
import "../css/DashCards.css"

const DashCards = () => {
  return (
    <div className="container-fluid px-3">
      <div className="dash-cards-scroll d-flex gap-3 overflow-auto py-2">
        {/* Earnings */}
        <div className="dash-card p-4 shadow-sm rounded-4 flex-shrink-0">
          <div className="d-flex justify-content-between align-items-start mb-0">
            <div>
              <h6 className="fw-semibold mb-4">Earnings</h6>
              <h3 className="fw-bold mb-1">$93,438.78</h3>
              <small className="text-muted">Monthly revenue</small>
            </div>
            <span className="icon-circle bg-danger-subtle text-danger">
              <FaDollarSign />
            </span>
          </div>
        </div>

        {/* Orders */}
        <div className="dash-card p-4 shadow-sm rounded-4 flex-shrink-0">
          <div className="d-flex justify-content-between align-items-start mb-0">
            <div>
              <h6 className="fw-semibold mb-4">Orders</h6>
              <h3 className="fw-bold mb-1">42,339</h3>
              <small className="text-muted">35+ New Sales</small>
            </div>
            <span className="icon-circle bg-warning-subtle text-warning">
              <FaShoppingCart />
            </span>
          </div>
        </div>

        {/* Customer */}
        <div className="dash-card p-4 shadow-sm rounded-4 flex-shrink-0">
          <div className="d-flex justify-content-between align-items-start mb-0">
            <div>
              <h6 className="fw-semibold mb-4">Customer</h6>
              <h3 className="fw-bold mb-1">39,354</h3>
              <small className="text-muted">30+ new in 2 days</small>
            </div>
            <span className="icon-circle bg-primary-subtle text-primary">
              <FaUsers />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashCards
