import React from "react"
import logo2 from "../assets/logo2.ico"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light pt-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <NavLink
                className="navbar-brand d-flex align-items-center fw-bold fs-3 text-white"
                to="#"
              >
                <img
                  src={logo2}
                  alt="FreshCart Logo"
                  height="35"
                  className="me-2"
                />
                FreshCart
              </NavLink>
            </div>
            <hr />
            <div className="col-md-3 col-6 mb-3 mt-3">
              <h6 className="fw-bold">Categories</h6>
              <ul className="list-unstyled small text-secondary">
                <li>Vegetables & Fruits</li>
                <li>Breakfast & instant food</li>
                <li>Bakery & Biscuits</li>
                <li>Atta, rice & dal</li>
                <li>Sauces & spreads</li>
                <li>Organic & gourmet</li>
                <li>Baby care</li>
                <li>Cleaning essentials</li>
                <li>Personal care</li>
              </ul>
            </div>

            <div className="col-md-3 col-6 mb-3 mt-3">
              <h6 className="fw-bold">&nbsp;</h6>
              <ul className="list-unstyled small text-secondary">
                <li>Dairy, bread & eggs</li>
                <li>Cold drinks & juices</li>
                <li>Tea, coffee & drinks</li>
                <li>Masala, oil & more</li>
                <li>Chicken, meat & fish</li>
                <li>Paan corner</li>
                <li>Pharma & wellness</li>
                <li>Home & office</li>
                <li>Pet care</li>
              </ul>
            </div>

            <div className="col-md-2 col-6 mb-3 mt-3">
              <h6 className="fw-bold">Get to know us</h6>
              <ul className="list-unstyled small text-secondary">
                <li>Company</li>
                <li>About</li>
                <li>Blog</li>
                <li>Help Center</li>
                <li>Our Value</li>
              </ul>
            </div>

            <div className="col-md-2 col-6 mb-3 mt-3">
              <h6 className="fw-bold">For Consumers</h6>
              <ul className="list-unstyled small text-secondary">
                <li>Payments</li>
                <li>Shipping</li>
                <li>Product Returns</li>
                <li>FAQ</li>
                <li>Shop Checkout</li>
              </ul>
            </div>

            <div className="col-md-2 col-6 mb-3 mt-3">
              <h6 className="fw-bold">Become a Shopper</h6>
              <ul className="list-unstyled small text-secondary">
                <li>Shopper Opportunities</li>
                <li>Become a Shopper</li>
                <li>Earnings</li>
                <li>Ideas & Guides</li>
                <li>New Retailers</li>
              </ul>
            </div>

            <div className="col-md-2 col-6 mb-2 mt-1">
              <h6 className="fw-bold">Freshcart programs</h6>
              <ul className="list-unstyled small text-secondary">
                <li>Freshcart programs</li>
                <li>Gift Cards</li>
                <li>Promos & Coupons</li>
                <li>Freshcart Ads</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-4 mb-5 small">
            <div className="text-secondary">
              © 2022 - 2025 FreshCart eCommerce HTML Template. Powered by
              <span className="text-success">Codescandy</span>.
            </div>
            <div className="d-flex align-items-center">
              <span className="me-3">Payment Partners</span>
              <img src="https://img.icons8.com/color/24/000000/amazon.png" />
              <img src="https://img.icons8.com/color/24/000000/mastercard-logo.png" />
              <img src="https://img.icons8.com/color/24/000000/paypal.png" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
