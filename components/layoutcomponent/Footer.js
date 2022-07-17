import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
    <div className="container pt-10">

        <div className="subscribe-area">
            <div className="section-title">
                <h2>Subscribe Newsletter</h2>
            </div>
            <div className="subscribe-shape">
                <img src="/assets/img/shape/1.png" alt="Shape"  />
                <img src="/assets/img/shape/1.png" alt="Shape"  />
                <img src="/assets/img/shape/1.png" alt="Shape"  />
                <img src="/assets/img/shape/1.png" alt="Shape"  />
                <img src="/assets/img/shape/2.png" alt="Shape" />
            </div>
            <div className="subscribe-item">
                <form className="newsletter-form" data-toggle="validator">
                    <input type="email" className="form-control" placeholder="Enter Your Email" name="EMAIL" required autoComplete="off"/>

                    <button className="btn subscribe-btn" type="submit">
                        Subscribe
                    </button>

                    <div id="validator-newsletter" className="form-result"></div>
                </form>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-6 col-lg-3">
                <div className="footer-item">
                    <div className="footer-logo">
                        <a href="#">
                        
                        </a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                        <ul>
                            <li>
                                <a>
                                    <i className="icofont-youtube-play"></i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="icofont-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a >
                                    <i className="icofont-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a >
                                    <i className="icofont-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-lg-3">
                <div className="footer-item">
                    <div className="footer-category">
                        <h3>Category</h3>
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="icofont-simple-right"></i>
                                    Development
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="icofont-simple-right"></i>
                                    Business
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="icofont-simple-right"></i>
                                    Tech & IT
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="icofont-simple-right"></i>
                                    Finance
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="icofont-simple-right"></i>
                                    Networking
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-lg-3">
                <div className="footer-item">
                    <div className="footer-category">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <a href="">
                                    <i className="icofont-simple-right"></i>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="about">
                                    <i className="icofont-simple-right"></i>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/blog">
                                    <i className="icofont-simple-right"></i>
                                    Blogs
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="icofont-simple-right"></i>
                                    Companies
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="icofont-simple-right"></i>
                                    Testimonials
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-lg-3">
                <div className="footer-item">
                    <div className="footer-find">
                        <h3>Find Us</h3>
                        <ul>
                            <li>
                                <i className="icofont-location-pin"></i>
                                28/A Street, New York City
                            </li>
                            <li>
                                <i className="icofont-ui-call"></i>
                                <a href="tel:+880123456789">
                                    +88 0123 456 789
                                </a>
                            </li>
                            <li>
                                <i className="icofont-ui-email"></i>
                                <a href="mailto:hello@gable.com">
                                    hello@gable.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="row">
                <div className="col-lg-6">
                    <div className="copyright-item">
                        <p>Copyright © JobSahiHai Group</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="copyright-item copyright-right">
                        <ul>
                            <li>
                                <a href="" >Terms & Conditions</a>
                            </li>
                            <li>
                                <span>-</span>
                            </li>
                            <li>
                                <a href="" >Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer