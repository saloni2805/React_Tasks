import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../App.css";
import { BsCart, BsHeart, BsSearch } from "react-icons/bs";

function NavBar() {
    return (
        <>
            {/* Logo Section */}
            <Container className="text-center my-2">
                <h1>Sofa.Com</h1>
            </Container>

            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
                {/* <NavLink className="navbar-brand mx-3" to="/logo">React Router</NavLink> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-4 " id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/">Home <span className="sr-only"></span></NavLink>
                        <NavLink className="nav-item nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-item nav-link" to="/contact">Contact</NavLink>
                        <NavLink className="nav-item nav-link" to="/allproducts/">All Products</NavLink>

                    </div>
                </div>

                <Form className="d-flex flex-grow-1 mx-1" style={{ maxWidth: "280px" }}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-secondary">
                        <BsSearch />
                    </Button>
                </Form>
                <div className="d-flex align-items-center  mx-2">
                    {/* <Navbar.Toggle aria-controls="navbarNavAltMarkup" className="me-2" /> */}
                    <div className="d-flex">
                        <Button variant="outline-secondary" className="me-2">
                            <BsHeart />
                        </Button>
                        <Button variant="outline-secondary">
                            <BsCart />
                        </Button>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default NavBar;
