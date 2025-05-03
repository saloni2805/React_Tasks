import React from "react"
import "../css/MainContent.css"
// import iconimg from "../assets/iconimg.jpg" // Use your profile image
import dash_img from "../assets/dash_img.jpg"

const MainContent = () => {
  return (
    <>
      {" "}
      <div className="container bg-warning">
        <div className="banner-container position-relative p-1">
          <img
            src={dash_img}
            alt="Dashboard"
            className="img-fluid rounded-4 w-100 "
          />

          {/* Text and button overlay */}
          <div className="banner-content position-absolute top-50 start-0 translate-middle-y ms-5">
            <h1 className="fw-bold">Welcome back! FreshCart</h1>
            <p className="text-muted mb-4">
              FreshCart is simple & clean design for developer and designer.
            </p>
            <button className="btn btn-success rounded-2">
              Create Product
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainContent
