import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    // console.log(blogs);

    useEffect(() => {
        fetch("blogs.json")
            .then((response) => response.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <div className="md:w-2/3">
            <h2>Blogs: {blogs.length}</h2>
            {blogs.map((blog) => (
                <Blog key={blog.id} blog={blog}></Blog>
            ))}
        </div>
    );
};

export default Blogs;
