// import { signIn } from 'next-auth/react'
import React from 'react'

const Login = () => {
    return (
        <>
        <div className="page-title-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="page-title-text">
                            <h2>Log In</h2>
                            <ul>
                                <li>
                                    <a>Home</a>
                                </li>
                                <li>
                                    <i className="icofont-simple-right"></i>
                                </li>
                                <li>Log In</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="login-area pt-100">
            <div className="container">
                <h2>Login Your Account</h2>

                <div className="login-wrap">
                    <div className="row">
                        <div className="col-sm-6 col-lg-6">
                            <div className="jobseeker-item">
                                <div className="jobseeker-icon">
                                    <i className="flaticon-job-search"></i>
                                </div>
                                <div className="jobseeker-inner">
                                    <span>Candidate</span>
                                    <h3>Login as a Candidate</h3>
                                </div>
                                <a href="">Get Started
                                    <i className="icofont-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6">
                            <div className="jobseeker-item">
                                <div className="jobseeker-icon">
                                    <i className="flaticon-recruitment"></i>
                                </div>
                                <div className="jobseeker-inner">
                                    <span>Employer</span>
                                    <h3>Login as a Employer</h3>
                                </div>
                                <a href="">Get Started
                                    <i className="icofont-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <form >
                    <div className="form-group ">
                        <input type="text" className="form-control" placeholder="Username, Phone Number or Email"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                </form>

                <div className="login-sign-in">
                    <a href="#">Forgot Password?</a>
                    <ul>
                        <li>Don’t Have Account ?</li>
                        <li>
                            <a href="create-account.html">Sign Up Here</a>
                        </li>
                    </ul>
                    <div className="text-center">
                        <button type="submit" className="btn login-btn">Sign In</button>
                    </div>
                </div>

                <div className="login-social">
                    <a className='cursor-pointer rounded-full' >
                        <i className="icofont-facebook"></i>
                        Login With Facebook
                    </a>
                    <a className="login-google cursor-pointer rounded-full" >
                        <i className="icofont-google-plus"></i>
                        Login With Google
                    </a>
                </div>
            </div>
        </div>
    </>
    )
}

export default Login