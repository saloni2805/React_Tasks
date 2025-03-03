import React from "react"
import { useParams } from "react-router-dom"
import images2 from "../assets/images/Chairs/images2.jpeg"
import imge3 from "../assets/images/Chairs/imge3.jpg"
import img4 from "../assets/images/Chairs/img4.jpg"
import img5 from "../assets/images/Chairs/img5.jpg"
// import img1 from '../assets/images/Chairs/img1.jpg'
import imge1 from "../assets/images/Sofa/imge1.jpg"
import img2 from "../assets/images/Sofa/img2.jpg"
import img3 from "../assets/images/Sofa/img3.jpg"
import image3 from "../assets/images/Sofa_Sets/image3.jpg"
import image2 from "../assets/images/Sofa_Sets/image2.jpg"
import images from "../assets/images/Sofa_Sets/images.jpeg"
import Button from "./Button"
import GoBackBtn from "./GoBackBtn"

const Product = () => {


    const SofaSetList = [
        {
            id: "1",
            name: "Product 1",
            category: "SofaSet",
            price: 100,
            image: images,
        },
        {
            id: "2",
            name: "Product 1",
            category: "SofaSet",
            price: 100,
            image: image2,
        },
        {
            id: "3",
            name: "Product 1",
            category: "SofaSet",
            price: 100,
            image: image3,
        },
    ]

    const SofaList = [
        {
            id: "4",
            name: "Product 1",
            category: "Sofa",
            price: 100,
            image: img3,
        },
        {
            id: "5",
            name: "Product 1",
            category: "Sofa",
            price: 100,
            image: img2,
        },
        {
            id: "6",
            name: "Product 1",
            category: "Sofa",
            price: 100,
            image: imge1,
        },
    ]

    const ChairsList = [
        {
            id: "7",
            name: "Product 1",
            category: "Chair",
            price: 100,
            image: images2,
        },
        {
            id: "8",
            name: "Product 1",
            category: "Chair",
            price: 100,
            image: imge3,
        },
        {
            id: "9",
            name: "Product 1",
            category: "Chair",
            price: 100,
            image: img4,
        },
        {
            id: "10",
            name: "Product 1",
            category: "Chair",
            price: 100,
            image: img5,
        },
    ]

    const { category, id } = useParams()

    let singleProduct

    if (category === "Chair") {
        singleProduct = ChairsList.find((item) => item.id === id)
    } else if (category === "SofaSet") {
        singleProduct = SofaSetList.find((item) => item.id === id)
    } else {
        singleProduct = SofaList.find((item) => item.id === id)
    }



    return (
        <><GoBackBtn />

            <div className="container mt-2 ">
                <div className="row">
                    <div className="col-md-6 p-2 d-flex justify-content-center align-items-center">
                        <img
                            src={singleProduct.image}
                            alt="Product"
                            className="img-fluid rounded mb-3 product-image"
                            id="mainImage"
                        />
                    </div>

                    <div className="col-md-6 p-4 ">
                        <h2 className="mb-3">{singleProduct.name}</h2>
                        <p className="text-muted mb-4">SKU: WH1000XM4</p>
                        <div className="mb-3">
                            <span className="h4 me-2">Rs.{singleProduct.price}</span>
                            <span className="text-muted">
                                <s>Rs.399.99</s>
                            </span>
                        </div>
                        <div className="mb-3">
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-half text-warning"></i>
                            <span className="ms-2">4.5 (120 reviews)</span>
                        </div>
                        <p className="mb-4">
                            Experience premium sound quality and industry-leading designs with
                            our products. Perfect for comfert loving people.
                        </p>
                        <div className="mb-4"></div>
                        <div className="mb-4">
                            <label htmlFor="quantity" className="form-label">
                                Quantity:
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="quantity"
                                defaultValue="1"
                                min="1"
                                style={{ width: " 80px" }}
                            />
                        </div>
                        <div className=" ">
                            <Button
                                name="Add to cart"
                                className={"btn me-2"}
                                icon={<i className="bi bi-cart-plus"></i>}
                                style={{ backgroundColor: "brown", color: "white" }}
                            />
                            <Button
                                name="Add to wishlist"
                                className={"btn btn-outline-secondary ms-2 "}
                                icon={<i className="bi bi-heart"></i>}
                            />
                        </div>

                        {/* <button className="btn btn-outline-secondary btn-lg mb-3">
                            <i className="bi bi-heart"></i> Add to Wishlist
                        </button> */}
                        <div className="mt-4">
                            <h5>Key Features:</h5>
                            <ul>
                                <li>Industry-leading noise cancellation</li>
                                <li>30-hour battery life</li>
                                <li>Touch sensor controls</li>
                                <li>Speak-to-chat technology</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
