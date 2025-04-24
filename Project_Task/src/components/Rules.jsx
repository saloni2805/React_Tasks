import React from "react"
import "../css/Rules.css"

const Rules = () => {
  return (
    <>
      <div
        className="container mt-4 text-secondary fw-semibold "
        style={{ maxWidth: "500px" }}
      >
        <div className="info-box py-3 px-3">
          <i className="bi bi-phone info-icon" style={{ fontSize: "15px" }}></i>
          <span style={{ fontSize: "14px" }}>
            Download the FreshCart App to your Phone.
          </span>
        </div>
        <div className="info-box py-3 px-3">
          <i
            className="bi bi-arrow-return-left info-icon"
            style={{ fontSize: "15px" }}
          ></i>
          <span style={{ fontSize: "14px" }}>
            Return Policy customers can return a product and ask for a refund.
          </span>
        </div>
        <div className="info-box py-3 px-3">
          <i
            className="bi bi-calendar-check info-icon"
            style={{ fontSize: "15px" }}
          ></i>
          <span style={{ fontSize: "14px" }}>
            Order now so you don’t miss the opportunities.
          </span>
        </div>
        <div className="info-box py-3 px-3">
          <i
            className="bi bi-clock info-icon "
            style={{ fontSize: "15px" }}
          ></i>
          <span style={{ fontSize: "14px" }}>
            Your order will arrive at your door in 15 minutes.
          </span>
        </div>
      </div>
    </>
  )
}

export default Rules
