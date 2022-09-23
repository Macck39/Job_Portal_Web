import React from 'react';
import Link from 'next/link'
// import Image from 'next/image'


export default function JobCard({job}) {
    return (
        <section className="job-area job-area-two pt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 h-screen">
                                <div className="job-item">
                                    <div className="job-inner align-items-center">
                                        <div className="job-inner-left">
                                            <h3>
                                                {job.jobtitle}
                                            </h3>
                                            {job.companyname}
                                            <ul>
                                                <li>
                                                    <i className="icofont-money-bag"></i>
                                                    $20k - $25k
                                                </li>
                                                <li>
                                                    <i className="icofont-location-pin"></i>
                                                    Location 210-27 Quadra, Market Street, Victoria Canada
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="job-inner-right">
                                            <ul>
                                                <li>
                                                    <a lhref="create-account.htm">Apply</a>
                                                </li>
                                                <li>
                                                    <span>Full Time</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    )
}

