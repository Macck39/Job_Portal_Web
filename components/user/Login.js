import React from 'react'
import { useState } from 'react'
const url = process.env.URL
import { useRouter } from 'next/router'
import axios from 'axios'

import { Alert } from "@material-tailwind/react";


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:8000/api/auth/signin`, {
            email,
            password
        })
        const res2 = await res.data

        // console.log("hii");

        if (res2.error) {
                    console.log("hii");
                    <Alert color="red">Login Failed.</Alert>
        } else {
            console.log(res2);
            <Alert color="green">Login Successfull.</Alert>
            router.push('/')
        }
    }
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

                    <form className="" onSubmit={(e) => handleSubmit(e)}>
                        <div className=" flex flex-col gap-3  lg:px-72 md:px-36 justify-center items-center">
                            <input type="text" name="name" placeholder="Registered Email"
                                value={email}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                                onChange={(e) => { setEmail(e.target.value) }} />

                            <input type="password" name="password" placeholder="Password"
                                value={password}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div className=" login-sign-in text-center">
                            <button type="submit" className="btn login-btn ">Sign In</button>
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
                        
                    </div>

                    <div className="login-social mt-4">
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

export default Login;