import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SingleBlog() {
    const {id} = useParams();

    const [blog,setBlog] = useState({});

    useEffect(() => {
        getSingleBlog();
    },[]);

    const getSingleBlog = async () => {
        let rawData = await fetch(`http://localhost:8000/api/v1/blog/blogInfoById/${id}`);
        let jsonBlog = await rawData.json();
        setBlog(jsonBlog.data);
    }
    
    return (
        <div>
            <h1>{blog.title}</h1>
        </div>
    )
}
