import React, { useState } from 'react'
import { BASE_URL } from '../../utills/Config';
import {useNavigate} from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [registerForm, setRegisterForm] = useState({
        name: "",
        email: "",
        password: "",
        phone: ""
    })


    const handleChange = (e) => {
        setRegisterForm((prevForm) => ({ ...prevForm, [e.target.id]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await fetch(`${BASE_URL}/api/v1/auth/registeruser`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(registerForm)
            })
            const data = await result.json();
            // console.log(data)
            navigate("/login");
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className="row mt-5 justify-content-center">
            <div className="col-md-6 col-lg-4">
                <div className="card shadow-sm p-4">
                    <h3 className="text-center mb-4">Register</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter your full name"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                placeholder="Enter your phone number"
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-4">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
