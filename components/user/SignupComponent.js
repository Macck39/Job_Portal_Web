import React from 'react'
import { useState } from 'react';

const SignupComponent = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const {name, email, password, error, loading, message, showForm} = values;


    const handleSubmit = () => {
        e.preventDefault();
        console.log({ name, email, password, error, loading, message, showForm });
    }

const handleChange = name => e => {
    setValues({...values, error: false, [name]: e.target.value})
}

    return (
        <div>
            <div className="page-title-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-text">
                                <h2>Create Your Account </h2>
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
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
                    <h2>Create Your Account</h2>

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
                                    <a href="login.html">Get Started
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
                                    <a href="login.html">Get Started
                                        <i className="icofont-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                name="name"
                                placeholder=" Name"
                                onChange={handleChange('name')} />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                value={email}
                                className="form-control"
                                name="email"
                                placeholder=" Email"
                                onChange={handleChange('email')} />
                        </div>
                        <div className="form-group">
                            <input type="password"
                                value={password}
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange('password')} />
                        </div>
                        
                    </form>

                    <div className="login-sign-in">

                        <div className="text-center">
                            <button type="submit"  className="btn login-btn">Sign Up</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
    
}

export default SignupComponent;
