import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { userContext } from '../context/Context';
import { token } from '../../utills/Config';

export default function Navbar() {
    const { user, dispatch } = useContext(userContext);
    // console.log(user)

    const handleLogout = ()=>{
        dispatch({type:"LOGOUT"});
    }

    return (
        <div>
            <div classNameName="row">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}>BlogSquare</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/createblog"}>Create Blog</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <Link className="nav-link" to={"/pricing"}>Pricing</Link> */}
                                </li>
                            </ul>
                        </div>
                        {user ? (
                            <>
                                <Link to={`/edituser/${user._id}`}><button class="btn btn-outline-success me-3" type="submit">{user.name}</button></Link>
                                <button class="btn btn-outline-primary" type="submit" onClick={handleLogout}>Logout</button>
                            </>
                        ) :
                            (
                                <>
                                    <Link to={"/login"}><button class="btn btn-outline-success me-3" type="submit">Login</button></Link>
                                    <Link to={"/register"}><button class="btn btn-outline-primary" type="submit">Register</button></Link>
                                </>
                            )}
                    </div>
                </nav>
            </div>
        </div>
    )
}
