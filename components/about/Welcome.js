import React from 'react'

const Welcome = () => {
    return (
        <div className="popular-area pt-100 pb-70 px-20">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="popular-item popular-right">
                            <div className="section-title text-left">
                                <h2>Welcome to Jobsahihai Group</h2>
                            </div>
                            <p>Jobsahihai.com is The Ultimate Place India&apos;s largest hiring platform that provides futuristic communication, skill hiring and placement solutions for businesses and educational institutions as well as career guidance services for end-users. helps people achieve success and Unlimited Earning Opportunities</p>
                            <div className="row popular-wrap">
                                <div className="col-sm-6 col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="flaticon-approved"></i>
                                            Trusted & Quality Job
                                        </li>
                                        <li>
                                            <i className="flaticon-no-money"></i>
                                            No Extra Charge
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="flaticon-enterprise"></i>
                                            Top Companies
                                        </li>
                                        <li>
                                            <i className="flaticon-employee"></i>
                                            Latest Jobs
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="popular-item">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <img src="/assets/img/home-1/33.jpg" alt="Popular" layout='intrinsic' />
                                </div>
                                <div className="col-lg-5">
                                    <div className="practice-inner">
                                        <img src="/assets/img/home-1/44.jpg" alt="Popular" layout='intrinsic' />
                                        <img src="/assets/img/home-1/55.jpg" alt="Popular" layout='intrinsic' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Welcome