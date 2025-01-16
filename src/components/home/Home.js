import React, { useContext, useEffect, useState } from 'react'
import Loading from '../loading/Loading';
import { Link } from 'react-router-dom';
import { BASE_URL, token } from '../../utills/Config';
import { userContext } from '../context/Context';


export default function Home() {
    const [blogs, setBlogs] = useState([]);
    const {role} = useContext(userContext);

    useEffect(() => {
        allBlogs();
    }, [])

    const allBlogs = async () => {
        let rawData = await fetch(`${BASE_URL}/api/v1/blog/allblogs`)
        let jsonBlogs = await rawData.json();
        setBlogs(jsonBlogs.data);
    };

    const handleDeleteById = async (id) => {
        try {
            const data = await fetch(`${BASE_URL}/api/v1/blog/deleteblog/${id}`,{
                method: 'DELETE',
                headers:{
                    authorization: `Bearer ${token}`
                }
            })
            const result = await data.json();
            window.location.reload();
        } catch (error) {
            console.log(error);
            
        }
    }

    
    return (
        <>
        {blogs.length > 0 ? (
            <div className="container my-4">
                <div className="row">
                    {blogs.map((currBlog) => {
                        return (
                            <div className="col-md-4 col-sm-6 mb-4" key={currBlog.id}>
                                <div className="card" style={{ width: "80%" }}>
                                    <img src="https://thumbs.dreamstime.com/b/blogging-blog-concepts-ideas-worktable-blogging-blog-concepts-ideas-white-worktable-110423482.jpg" className="card-img-top" alt={currBlog.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{currBlog.title}</h5>
                                        <p className="card-text">{currBlog.content}</p>
                                        <Link to={`/bloginfo/${currBlog._id}`} className="btn btn-primary">
                                            Read More
                                        </Link>
                                        {role === "admin" && <button className='btn btn-danger ml-2' onClick={()=>handleDeleteById(currBlog._id)}>Delete Blog</button>}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        ) : (
            <Loading />
        )}
    </>    )
}
