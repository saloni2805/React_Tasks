import React from "react"
import "../../css/MainContent.css"
import dash_img from "../../assets/dash_img.jpg"
import DashCards from "../../components/DashCards"

const MainContent = () => {
  return (
    <>
      <div className="container-fluid px-3">
        <div
          className="position-relative overflow-hidden rounded-4 mb-3"
          style={{ marginTop: "60px" }}
        >
          <img
            src={dash_img}
            alt="Dashboard Banner"
            className="img-fluid w-100 rounded-4"
            style={{ maxHeight: "250px", objectFit: "cover" }}
          />

          {/* Overlay Content */}
          <div
            className="position-absolute top-50 start-0 translate-middle-y ms-5"
            style={{ zIndex: 2 }}
          >
            <h1 className="fw-semibold mb-2" style={{ fontSize: "35px" }}>
              Welcome back! FreshCart
            </h1>
            <p className="text-muted mb-3">
              FreshCart is simple & clean design for developer and designer.
            </p>
            <button className="btn btn-success rounded-2 shadow-sm">
              Create Product
            </button>
          </div>
        </div>
      </div>

      <DashCards />
    </>
  )
}

export default MainContent
