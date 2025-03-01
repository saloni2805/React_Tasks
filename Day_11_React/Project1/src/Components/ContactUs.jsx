import React from "react"
import Parition from "./Parition"
import Button from "./Button"
import {
    BsPhone,
    BsHeart,
    BsSearch,
    BsTelephone,
    BsMailbox,
    BsInbox,
    BsMap,
    BsPinMap,
    BsInstagram,
    BsFacebook,
    BsTwitterX,
    BsLinkedin,
} from "react-icons/bs"

const ContactUs = () => {
    return (
        <>
            <Parition name="Contact us" />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 bg-body-secondary shadow">
                        <div className="contact-form m-3  ">
                            <h3 className="text-center mb-3"> Get in touch with us</h3>
                            <form>
                                <div className="form-group m-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="form-group m-2">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="form-group m-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone"
                                    />
                                </div>
                                <div className="form-group m-2">
                                    <textarea className="form-control" placeholder="Message" />
                                </div>
                                <div className="d-flex justify-content-center mt-3">
                                    {/* <button type="submit" className="btn btn-primary">Send Message</button> */}
                                    <Button
                                        name="Send Message"
                                        type="submit"
                                        style={{ backgroundColor: "brown", color: "white" }}
                                    />
                                </div>

                                {/* </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row ">
                    <div className="col-md-6 justify-content-center d-flex">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27470.434764502803!2d73.77013897431638!3d18.502253700000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfc7f37d4bb5%3A0xd4a9204536150ad4!2sShri%20Raj%20Furniture!5e1!3m2!1sen!2sin!4v1740838349888!5m2!1sen!2sin" width="600" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-md-6  p-2">
                        {/* <div className="">
                            <p>Hi</p>
                        </div> */}

                        <div className="row-md  d-flex justify-content-center p-2 align-items-center">
                            <div className="">
                                <h1>Sofa.com</h1>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item fs-5">
                                        <BsTelephone size={24} className="me-2" /> +91- 9867546345
                                    </li>
                                    <li className="list-group-item fs-5">
                                        <BsInbox size={24} className="me-2" /> sofa.xyz@gmail.com
                                    </li>
                                    <li className="list-group-item fs-5">
                                        <BsPinMap size={24} className="me-2" /> 654, yubdfvi, wiuevh, wrunv, njenv, 765567
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center gap-3 mt-4">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <BsInstagram size={30} className="text-danger" />
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <BsFacebook size={30} className="text-primary" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <BsTwitterX size={30} className="text-black" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <BsLinkedin size={30} className="text-primary" />
                            </a>
                        </div>
                    </div>

                </div>{" "}
            </div>
        </>
    )
}

export default ContactUs
