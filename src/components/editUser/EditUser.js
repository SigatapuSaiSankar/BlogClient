import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL, token } from '../../utills/Config';
import { userContext } from '../context/Context';

export default function EditUser() {
    const { id } = useParams();
    const {dispatch} = useContext(userContext);
    const [editForm, setEditForm] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEditForm((prevForm) => ({ ...prevForm, [e.target.id]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await fetch(`${BASE_URL}/api/v1/user/edituserinfo/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${token}`
                },
                body: JSON.stringify(editForm)
            });
            const data = await result.json();
            dispatch({type: "LOGOUT"});
            navigate("/");
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div className="row mt-5 justify-content-center">
            <div className="col-md-6 col-lg-4">
                <div className="card shadow-sm p-4">
                    <h3 className="text-center mb-4">Edit User</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter name"
                                value={editForm.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                value={editForm.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                placeholder="Enter phone number"
                                value={editForm.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-4">
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
