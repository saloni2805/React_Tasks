import React, { useState } from "react"

const Categories = () => {
  const [openCategory, setOpenCategory] = useState(null)

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category)
  }

  return (
    <>
      <h5 className=" fw-bold mt-3 py-2">Categories</h5>

      <div className="container">
        <div className="accordion" id="categoryAccordion">
          {/* Dairy, Bread & Eggs */}
          <div className="accordion-item border-1">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${
                  openCategory === "Dairy" ? "text-success" : ""
                } ${openCategory === "Dairy" ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleCategory("Dairy")}
                style={{ fontSize: "15px" }}
              >
                <i className="bi bi-cart4 me-2"></i>{" "}
                <span className=" fw-semibold ">Dairy, Bread & Eggs</span>{" "}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openCategory === "Dairy" ? "show" : ""
              }`}
            >
              <div className="accordion-body ps-4">
                <ul className="list-unstyled mx-1 my-0">
                  <li>
                    <span
                      // onClick={() => handleItemClick("Milk")}
                      style={{ cursor: "pointer" }}
                    >
                      Milk
                    </span>
                  </li>
                  <li>
                    <span
                      // onClick={() => handleItemClick("Cheese")}
                      style={{ cursor: "pointer" }}
                    >
                      Cheese
                    </span>
                  </li>
                  <li>
                    <span
                      // onClick={() => handleItemClick("Bread")}
                      style={{ cursor: "pointer" }}
                    >
                      Bread
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Snacks & Munchies */}
          <div className="accordion-item border-1">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${
                  openCategory === "Snacks" ? "text-success" : ""
                } ${openCategory === "Snacks" ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleCategory("Snacks")}
                style={{ fontSize: "15px" }}
              >
                <i className="bi bi-cart4 me-2"></i>{" "}
                <span className=" fw-semibold ">Dairy, Bread & Eggs</span>{" "}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openCategory === "Snacks" ? "show" : ""
              }`}
            >
              <div className="accordion-body ps-4">
                <ul className="list-unstyled mb-0">
                  <ul className="list-unstyled mx-1 my-0">
                    <li>
                      <span
                        // onClick={() => handleItemClick("Milk")}
                        style={{ cursor: "pointer" }}
                      >
                        Milk
                      </span>
                    </li>
                    <li>
                      <span
                        // onClick={() => handleItemClick("Cheese")}
                        style={{ cursor: "pointer" }}
                      >
                        Cheese
                      </span>
                    </li>
                    <li>
                      <span
                        // onClick={() => handleItemClick("Bread")}
                        style={{ cursor: "pointer" }}
                      >
                        Bread
                      </span>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>

          {/* Fruits & Vegetables */}
          <div className="accordion-item border-1">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${
                  openCategory === "Fruits" ? "text-success" : ""
                } ${openCategory === "Fruits" ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleCategory("Fruits")}
                style={{ fontSize: "15px" }}
              >
                <i className="bi bi-cart4 me-2"></i>{" "}
                <span className=" fw-semibold ">Dairy, Bread & Eggs</span>
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openCategory === "Fruits" ? "show" : ""
              }`}
            >
              <div className="accordion-body ps-4">
                <ul className="list-unstyled mb-0">
                  <ul className="list-unstyled mx-1 my-0">
                    <li>
                      <span
                        // onClick={() => handleItemClick("Milk")}
                        style={{ cursor: "pointer" }}
                      >
                        Milk
                      </span>
                    </li>
                    <li>
                      <span
                        // onClick={() => handleItemClick("Cheese")}
                        style={{ cursor: "pointer" }}
                      >
                        Cheese
                      </span>
                    </li>
                    <li>
                      <span
                        // onClick={() => handleItemClick("Bread")}
                        style={{ cursor: "pointer" }}
                      >
                        Bread
                      </span>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>

          {/* Add other categories similarly... */}
        </div>
      </div>
    </>
  )
}

export default Categories
