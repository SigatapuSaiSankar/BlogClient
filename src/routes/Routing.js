import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from '../components/home/Home';
import SingleBlog from '../singleblog/SingleBlog';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import CreateBlog from '../components/createBlog/CreateBlog';
import EditUser from '../components/editUser/EditUser';

export default function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/BlogInfo/:id" element={<SingleBlog/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path='/createblog' element={<CreateBlog/>}/>
                <Route path='/edituser/:id' element={<EditUser/>}/>
            </Routes>
        </>
    )
}
