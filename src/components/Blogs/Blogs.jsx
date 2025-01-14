import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ addToBookmarks }) => {
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
                <Blog
                    key={blog.id}
                    blog={blog}
                    addToBookmarks={addToBookmarks}
                ></Blog>
            ))}
        </div>
    );
};


Blogs.propTypes = {
    addToBookmarks: PropTypes.func.isRequired,
};

export default Blogs;
