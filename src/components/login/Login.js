import React, { useContext, useState } from 'react'
import { BASE_URL } from '../../utills/Config'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../context/Context'

export default function Login() {
    const {user,dispatch} = useContext(userContext);

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginForm((prevform) => ({ ...prevform, [e.target.id]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await fetch(`${BASE_URL}/api/v1/auth/login`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                credentials: "include",//helps while deploying (doesnt know difference when developing)
                body: JSON.stringify(loginForm)
            })
            const data = await result.json();
            dispatch({type:"LOGIN_SUCCESSFUL",payload:data});
            // console.log(data);
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="row mt-5 justify-content-center">
            <div className="col-md-6 col-lg-4">
                <div className="card shadow-sm p-4">
                    <h3 className="text-center mb-4">Login</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-4">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}
