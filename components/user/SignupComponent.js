import { useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios'
import { Alert } from "@material-tailwind/react";


const SignupComponent = () => {
    
   
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    
    const url = process.env.URL


    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:8000/api/auth/signup`, {
            name,
            email,
            password
        })
        const res2 = await res.data

        // console.log("hii");

        if (res2.error) {
            console.log(res2);
            <Alert color="red"> Signup Failed</Alert>
            
        } else {
            <Alert color="green">Signup Successfull.</Alert>
            router.push('/login')
        }
    }


    return (
        <div>
            
            <div className="login-area pt-100">
                <div className="container pt-8 ">
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

                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                name="name"
                                placeholder=" Name"
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                value={email}
                                className="form-control"
                                name="email"
                                placeholder=" Email"
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="password"
                                value={password}
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="login-sign-in">
                          
                                <button type="submit" className="btn login-btn">Sign Up</button>
                          
                        </div>
                    </form>


                </div>
            </div>
        </div>
    )

}

export default SignupComponent;
