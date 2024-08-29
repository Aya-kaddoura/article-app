import Cookies from "universal-cookie";
import NavBar from "../../components/NavBar.js";
import "./Home.css";
import { Link } from "react-router-dom";
export default function Home(){
    const cookie = new Cookies();
    const token = cookie.get("Bearer");
    return(
        <div>
            {/* Header Section */}
            <div className="position-relative text-light header">
                <NavBar />
                <div className="position-absolute z-1 top-0 w-100 h-100 opacity-50 overlay bg-black"></div>
                <div className="position-relative container z-2 h-100 align-content-center">
                    <h1>Articles</h1>
                    <p className="fs-4">where you can share ideas with others</p>
                    {token ?
                    (<Link to="/articles"><button className=" border-0 rounded-pill px-4 shadow fs-5 py-2 fw-medium ms-3 text-main">Read Articles</button></Link>)
                    :
                    (<><Link to="/login"><button className=" border-0 rounded-pill px-4 shadow fs-5 py-2 bg-main text-light fw-medium">Log In</button></Link>
                    <Link to="/articles"><button className=" border-0 rounded-pill px-4 shadow fs-5 py-2 fw-medium ms-3 text-main">Read Articles</button></Link></>)
                    }

                </div>
            </div>

            {/* Services Section */}
            <div className=" position-relative services mb-5">
                <div className=" position-absolute z-2 container row mx-auto">
                    <div className=" col-10 col-lg-4 mx-auto my-3 text-center">
                        <div className=" overflow-hidden"><img className=" w-100" src={require("../../Images/service (1).jpg")} alt="service-img"></img></div>
                        <h4 className=" my-3 text-main">Share Ideas</h4>
                        <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, qui.</p>
                    </div>
                    <div className=" col-10 col-lg-4 mx-auto my-3 text-center">
                        <div className=" overflow-hidden"><img className=" w-100" src={require("../../Images/service (2).jpg")} alt="service-img"></img></div>
                        <h4 className=" my-3 text-main">Read Artical</h4>
                        <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, qui.</p>
                    </div>
                    <div className=" col-10 col-lg-4 mx-auto my-3 text-center">
                        <div className=" overflow-hidden"><img className=" w-100" src={require("../../Images/service (3).jpg")} alt="service-img"></img></div>
                        <h4 className=" my-3 text-main">Write Your Adventures</h4>
                        <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, qui.</p>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="about">
                <div className=" container">
                    <div className="row justify-content-center align-items-end gap-5">
                        <div className="col-11 col-lg-7 about-text bg-light">
                            <div className="about-text p-5 bg-light">
                                <p>ABOUT US</p>
                                <h1 className="my-5">With Our Website you Can Share Stories With Others</h1>
                                <p className="fs-5 fw-light">Aorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <p className="fs-5 fw-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                            </div>
                        </div>
                        <div className="col-5 col-lg-4">
                            <button className="text-light bg-main border-0 py-lg-4 py-1 px-3 px-lg-5 fs-5">Read More</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="content my-5">
                <div className="container">
                    <div className="row align-items-stretch justify-content-center no-gutters">
                        <div className="col-md-7">
                            <div className="form shadow contact-wrap p-5">
                                <h3 className="text-center fs-1 my-2">Let's Talk</h3>
                                <form className="my-0" method="post" id="contactForm" name="contactForm">
                                    <div className="row">
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="" className=" col-form-label">Name</label>
                                            <input type="text" className="form-control" name="name" id="name" placeholder="Your name" />
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="" className=" col-form-label">Email</label>
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your email" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 form-group mb-3">
                                            <label htmlFor="budget" className=" col-form-label">Subject</label>
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Your subject" />
                                        </div>
                                    </div>

                                    <div className="row mb-5">
                                        <div className="col-md-12 form-group mb-3">
                                            <label htmlFor="message" className=" col-form-label">Message</label>
                                            <textarea className="form-control" name="message" id="message" cols="30" rows="4"
                                                placeholder="Write your message"></textarea>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-md-5 form-group text-center">
                                            <input type="submit" value="Send Message" className="btn btn-block btn-primary rounded-0 py-2 px-4 rounded-pill" />
                                            <span className="submitting"></span>
                                        </div>
                                    </div>
                                    
                                </form>

                                </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="footer py-5 bg-dark text-light mt-3">
                <div className="container">
                    <div className="row ">
                        <div className="col-11 col-lg-3">
                            <h3>About</h3>
                            <p className="opacity-75">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u</p>
                        </div>
                        <div className="col-11 col-lg-3">
                            <h3>Menu</h3>
                            <a className="d-block text-light text-decoration-none opacity-75" href="@">Home</a>
                            <a className="d-block text-light text-decoration-none opacity-75" href="@">About US</a>
                            <a className="d-block text-light text-decoration-none opacity-75" href="@">Gallery</a>
                            <a className="d-block text-light text-decoration-none opacity-75" href="@">Services</a>
                            <a className="d-block text-light text-decoration-none opacity-75" href="@">Contact Us</a>
                        </div>
                        <div className="col-11 col-lg-3">
                            <h3>Useful Link</h3>
                            <p className="w-25 opacity-75">Adipiscing Elit, sed do Eiusmod Tempor incididunt</p>
                        </div>
                        <div className="col-11 col-lg-3">
                            <h3>Contact Us</h3>
                            <a className="d-block text-light text-decoration-none my-2 opacity-75" style={{fontSize:'.9em'}}
                                href="@"><i className="text-main me-2 fa-solid fa-location"></i> Address : Loram Ipusm</a>
                            <a className="d-block text-light text-decoration-none my-2 opacity-75" style={{fontSize:'.9em'}}
                                href="@"><i className="text-main me-2 fa-solid fa-phone"></i> Call : +963 935992856</a>
                            <a className="d-block text-light text-decoration-none my-2 opacity-75" style={{fontSize:'.9em'}}
                                href="@"><i className="text-main me-2 fa-solid fa-message"></i> Email : ayakaddoura10@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}