import React from 'react'

export default function Contact () {
    return (
        <div><div className="page-title-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="page-title-text">
                            <h2>Contact</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="contact-form-area ptb-100">
                <div className="container-fluid">
                    <form id="contactForm">
                        <div className="row contact-wrap">
                            <div className="col-sm-6 col-lg-6">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="form-control"
                                        required=""
                                        data-error="Please enter your name"
                                        placeholder="Your Full Name"
                                    />
                                    <div className="help-block with-errors" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-control"
                                        required=""
                                        data-error="Please enter your email"
                                        placeholder="Your Email"
                                    />
                                    <div className="help-block with-errors" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="phone_number"
                                        id="phone_number"
                                        required=""
                                        data-error="Please enter your number"
                                        className="form-control"
                                        placeholder="Your Phone"
                                    />
                                    <div className="help-block with-errors" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="msg_subject"
                                        id="msg_subject"
                                        className="form-control"
                                        required=""
                                        data-error="Please enter your subject"
                                        placeholder="Subject"
                                    />
                                    <div className="help-block with-errors" />
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-12">
                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        id="message"
                                        cols={30}
                                        rows={8}
                                        required=""
                                        data-error="Write your message"
                                        placeholder="Job Description"
                                        defaultValue={""}
                                    />
                                    <div className="help-block with-errors" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <div className="form-check agree-label">
                                        <input
                                            name="gridCheck"
                                            defaultValue="I agree to the terms and privacy policy."
                                            className="form-check-input"
                                            type="checkbox"
                                            id="gridCheck"
                                            required=""
                                        />
                                        <label className="form-check-label" htmlFor="gridCheck">
                                            Accept <a href="terms-condition.html">Terms &amp; Conditions</a>{" "}
                                            And <a href="privacy-policy.html">Privacy Policy.</a>
                                        </label>
                                        <div className="help-block with-errors gridCheck-error" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-12">
                                <div className="text-center">
                                    <button type="submit" className="btn contact-btn">
                                        Submit
                                    </button>
                                </div>
                                <div id="msgSubmit" className="h3 text-center hidden" />
                                <div className="clearfix" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

