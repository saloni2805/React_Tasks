import React from "react"

const FirstUser = () => {
  return (
    <>
      <div className="fluid my-3 ">
        <div
          className="bg-danger rounded-3 bg-opacity-25 py-3 px-3 text-danger  d-flex justify-content-center align-items-center"
          style={{ fontSize: "15px" }}
        >
          First time here? Get 10% off your first order!Click here{" "}
          <span
            className="mx-2 border-danger rounded-3 ms-3 px-3 py-1 fw-semibold"
            style={{ border: "1px dotted red" }}
          >
            FIRSTTIME10
          </span>
        </div>
      </div>
    </>
  )
}

export default FirstUser
