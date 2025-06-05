import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import "./styles.css"

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  if (!items || items.length === 0) {
    return <p>No items available</p>
  }

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <button
            className="accordion-title"
            onClick={() => handleToggle(index)}
          >
            {item.title}
            {activeIndex === index ? (
              <FaChevronDown style={{ float: "right" }} />
            ) : (
              <FaChevronUp style={{ float: "right" }} />
            )}
          </button>
          {activeIndex === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
