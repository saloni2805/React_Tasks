import React from "react";
import Parition from "./Parition";
import image1 from "../assets/images/Aboutus/image1.jpg";

const About = () => {
    return (
        <>
            <Parition name="About us" />
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src={image1} alt="About Us" className="img-fluid rounded shadow" />
                    </div>
                    <div className="col-md-6 mt-2">
                        <h2>Welcome to Our Company</h2>
                        <p>
                            We are committed to providing high-quality products and exceptional customer service.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
