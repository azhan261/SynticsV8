import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <div>
 <div>
                {/* ======= Footer ======= */}
                <footer id="footer">
                    <div className="footer-top">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-1" />
                            <div className="col-md-2 footer-contact">
                            <h3>Syntics Software</h3>
                            <p>
                                Ferozpur Road, Lahore<br />
                                Pakistan <br />
                                <strong>Email:</strong> <br /> amna@syntics.co<br />azlan@syntics.co 
                            </p>
                            </div>
                            <div className="col-md-2 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right" /> <a href="/#home">Home</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="/#about">About us</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="/#services">Services</a></li>
                            </ul>
                            </div>
                            <div className="col-md-2 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right" /> <a href="/#services">Web Design</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="/#services">Web Development</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="/#services">App Development</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="/#services">QA Testing</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="/#services">AI Solutions</a></li>
                            </ul>
                            </div>
                            <div className="col-md-2 footer-links">
                            <h4>Our Trainings</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right" /> <a href="/#pricing">Web Development</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="/#pricing">AI</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="/#pricing">Game Development</a></li>
                            </ul>
                            </div>
                            <div className="col-md-2">
                            <h4>Our License</h4>
                            <img src="assets/img/license.png" className="img-fluid" alt="License" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="container d-md-flex py-4">
                        <div className="me-md-auto text-center text-md-start">
                        <div className="copyright" style={{color: 'rgba(55, 64, 85, 0.9) !important'}}>
                            © Copyright <strong><span>Syntics</span></strong>. All Rights Reserved
                        </div>
                        </div>
                        <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                        </div>
                    </div>
                </footer>{/* End Footer */}
                {/* <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a> */}
                
            </div>
        </div>
    )
}

export default Footer
