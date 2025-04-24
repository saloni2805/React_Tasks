import React, { useContext } from "react"
import MyContext from "../context/MyProvider"
import ProductCard from "./ProductCard"

const NewProducts = () => {
  const { products } = useContext(MyContext)

  return (
    <>
      <div className="container p-1 position-relative ">
        <div className="d-flex justify-content-between align-items-center">
          <div className="mt-4">
            <h4 className="fw-bold">New Products</h4>
            <h6 className="text-secondary">
              New products with updated stocks.
            </h6>
          </div>
          <div>
            <button
              type="button"
              className="btn bg-secondary bg-opacity-25 fw-semibold px-3"
              style={{ fontSize: "0.9rem" }}
            >
              View all
            </button>
          </div>
        </div>
        <div className="py-3">
          <div className="row g-2">
            {products.map((product, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default NewProducts
