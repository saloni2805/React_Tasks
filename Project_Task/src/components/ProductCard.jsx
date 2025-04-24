import React from "react"
import { Card } from "react-bootstrap"
import "../css/ProductCard.css"

const ProductCard = ({ product }) => {
  const renderRatingStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`}>★</span>)
    }

    if (hasHalfStar) {
      stars.push(<span key="half">☆</span>)
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`}>☆</span>)
    }

    return (
      <div className="text-warning">
        {stars}{" "}
        <span
          className="text-secondary fw-semibold"
          style={{ fontSize: "14px" }}
        >
          {rating.toFixed(1)}
        </span>
      </div>
    )
  }

  return (
    <>
      <Card className="h-100 w-100 border-0 mt-2">
        <div
          className="d-flex justify-content-center align-items-center border rounded-4 bg-white mx-2 hover-shadow  "
          style={{ height: "200px", padding: "6px" }}
        >
          <Card.Img
            variant="top"
            src={product?.productImage}
            alt={product?.title}
            className="img-fluid transition"
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        </div>

        <Card.Body>
          {product.regularPrice > product.salePrice && (
            <span
              className="text-white bg-danger me-2 my-1 px-1 border-none rounded-5"
              style={{ fontSize: "12px" }}
            >
              <strong>
                {Math.round(
                  ((product.regularPrice - product.salePrice) /
                    product.regularPrice) *
                    100
                )}
                %
              </strong>
            </span>
          )}
          <Card.Title
            className="my-1 text-decoration-none link-dark hover-text-success"
            style={{ cursor: "pointer", fontSize: "15px" }}
          >
            {product.title}
          </Card.Title>
          <div className="d-flex align-items-center mb-1">
            <div>
              {product.salePrice !== product.regularPrice && (
                <span className="fw-bold me-2" style={{ fontSize: "18px" }}>
                  ₹{product.salePrice}
                </span>
              )}
              <span
                className={
                  product.salePrice !== product.regularPrice
                    ? "text-decoration-line-through text-muted"
                    : "fw-bold"
                }
                style={{ fontSize: "15px" }}
              >
                ₹{product.regularPrice}
              </span>
            </div>
          </div>
          {renderRatingStars(product.rating)}
        </Card.Body>
      </Card>
    </>
  )
}

export default ProductCard
