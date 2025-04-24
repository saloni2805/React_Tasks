import React from "react"
import iconimg from "../assets/iconimg.jpg"

const Testmonials = () => {
  return (
    <>
      <h5 className=" fw-bold mt-3 py-2">Testmonials</h5>
      <div className="container">
        {" "}
        <div
          className=" bg-warning bg-opacity-25 p-3 rounded-3 col-sm-12 "
          // style={{ maxWidth: "500px" }}
        >
          <h6 className="fw-semibold mb-2">The Best Grocery Store Design</h6>
          <p className="text-secondary mb-4" style={{ fontSize: "14px" }}>
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Curabitur
            iaculis maximus purus, a gravida dui tempor eget.
          </p>

          <div className="d-flex align-items-center gap-3">
            <img
              src={iconimg}
              alt="Alishia Jones"
              className="rounded-circle"
              width="50"
              height="50"
            />
            <div>
              <div className="fw-bold">Alishia Jones</div>
              <div className="text-muted" style={{ fontSize: "0.875rem" }}>
                Sales Manager
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testmonials
