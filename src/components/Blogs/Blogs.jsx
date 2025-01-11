import React, { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    console.log(blogs);

    useEffect(() => {
        fetch("blogs.json")
            .then((response) => response.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <div>
            <h2>Blogs</h2>
        </div>
    );
};

export default Blogs;
