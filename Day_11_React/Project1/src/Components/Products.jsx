import Card from "react-bootstrap/Card"
import Button from "./Button"
import { NavLink } from "react-router-dom";

function Products({ products, category }) {
    console.log(category)
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img
                style={{ height: "18rem" }}
                variant="top"
                src={products.image}
            />
            <Card.Body>
                <Card.Title>{products.name}</Card.Title>
                <Card.Text>RS. {products.price}</Card.Text>
                <div className="d-flex justify-content-between align-items-center ">
                    <Button
                        type="button"
                        className={"btn"}
                        name="Buy Now"
                        style={{ backgroundColor: "red", color: "white" }}
                    />
                    <NavLink to={`/${category}/${products.id}`}>
                        <Button
                            type="button"
                            className={"btn"}
                            name="View Details"
                            style={{
                                backgroundColor: "white",
                                border: "1px solid black",
                                color: "black",
                            }}
                        />
                    </NavLink>

                </div>
            </Card.Body>
        </Card >

    )
}

export default Products
