import React from 'react'
import Image from 'next/image'
import Link from "next/link"

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
                    <div className="footer-logo md:mt-20 ">
                                                
                        <ul className="flex items-center justify-center">
                            <li >
                            <Link href="https://www.youtube.com/channel/UCGlGQkTaospXplIKqqIUNHg">
                                <a target="_blank" rel="noopener noreferrer" >
                                    <i className="icofont-youtube-play"></i>
                                </a>
                                </Link>
                            </li>
                            <li><Link href="https://www.facebook.com/Officialjobsahihai">
                                <a target="_blank" rel="noopener noreferrer" >
                                    <i className="icofont-facebook"></i>
                                </a>
                                </Link>
                            </li>
                            <li><Link href="https://www.instagram.com/jobsahihai/">
                                <a target="_blank" rel="noopener noreferrer" >
                                    <i className="icofont-instagram"></i>
                                </a>
                                </Link>
                            </li>
                            <li>
                            <Link href="https://twitter.com/jobsahihai"_>
                                <a target="_blank" rel="noopener noreferrer" >
                                    <i className="icofont-twitter"></i>
                                </a>
                                </Link>
                            </li>
                            <li>
                            <Link href="https://www.linkedin.com/company/jobsahihai/?viewAsMember=true" >
                                <a target="_blank" rel="noopener noreferrer" >
                                    <i className="icofont-linkedin"></i>
                                </a>
                                </Link>
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
                            <Link href="/">
                                <a>
                                    <i className="icofont-simple-right"></i>
                                    Home
                                </a>
                                </Link>
                            </li>
                            <li>
                            <Link href="/about">
                                <a>
                                    <i className="icofont-simple-right"></i>
                                    About Us
                                </a>
                                </Link>
                            </li>
                            <li>
                            <Link href="/blogs">
                                <a>
                                    <i className="icofont-simple-right"></i>
                                    Blogs
                                </a>
                                </Link>
                            </li>
                            <li>
                                <a href="#">
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
                            <li className="text-sm">
                                <i className="icofont-location-pin"></i>
                                Jaitpur Badarpur New Delhi 110044

                            </li>
                            <li>
                                <i className="icofont-ui-call"></i>
                                <a >
                                8700828936
                                </a>
                            </li>
                            <li>
                                <i className="icofont-ui-email"></i>
                                <a>
                                Business@jobsahihai.com
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