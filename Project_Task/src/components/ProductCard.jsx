import React from "react"
import { Card, Row, Col, Badge, Button } from "react-bootstrap"

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
      <div>
        <span className="text-warning">{stars} </span> {rating.toFixed(1)}
      </div>
    )
  }

  return (
    <>
      <Card className="h-100 border-0">
        <div
          className="d-flex justify-content-center align-items-center border rounded-4 bg-white m-1"
          style={{ height: "200px", padding: "10px" }}
        >
          <Card.Img
            variant="top"
            src={product?.productImage}
            alt={product?.title}
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
            <span className="text-white bg-danger me-2 my-3 px-2 border rounded-5">
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
          <Card.Title className="my-2" style={{ cursor: "pointer" }}>
            {product.title}
          </Card.Title>
          <div className="d-flex align-items-center mb-1">
            <div>
              {product.salePrice !== product.regularPrice && (
                <span className="fw-bold me-2">₹{product.salePrice}</span>
              )}
              <span
                className={
                  product.salePrice !== product.regularPrice
                    ? "text-decoration-line-through text-muted"
                    : "fw-bold"
                }
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
