import React, { useState } from 'react'
import { BASE_URL, token } from '../../utills/Config';
import { useNavigate } from 'react-router-dom';

export default function CreateBlog() {
    const [blogData,setBlogData] = useState({
        title: "",
        topic: "",
        content: ""
    })

    const navigate = useNavigate();

    const handleChange = (e)=>{
        setBlogData((prevData)=>({...prevData,[e.target.id]:e.target.value}));
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const data = await fetch(`${BASE_URL}/api/v1/blog/createblog`,{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${token}`
                },body: JSON.stringify(blogData)
            })
            const result = await data.json();
            console.log(result);
            navigate("/");
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <>
        <div className="row mt-5 justify-content-center">
            <div className="col-md-8 col-lg-6">
                <div className="card shadow-sm p-4">
                    <h3 className="text-center mb-4">Create Blog</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="blogTitle">Blog Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                placeholder="Enter blog title"
                                value={blogData.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="topic">Topic</label>
                            <input
                                type="text"
                                className="form-control"
                                id="topic"
                                placeholder="Enter topic"
                                value={blogData.topic}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="blogContent">Blog Content</label>
                            <textarea
                                className="form-control"
                                id="content"
                                rows="6"
                                placeholder="Write your blog here..."
                                value={blogData.content}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-4">
                            Submit Blog
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
