import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ addToBookmarks,calculateReadingTime }) => {
    const [blogs, setBlogs] = useState([]);
    // console.log(blogs);

    useEffect(() => {
        fetch("blogs.json")
            .then((response) => response.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <div className="md:w-2/3">
            <h2 className="text-2xl ml-4 italic font-semibold">Blogs: {blogs.length}</h2>
            {blogs.map((blog) => (
                <Blog
                    key={blog.id}
                    blog={blog}
                    addToBookmarks={addToBookmarks}
                    calculateReadingTime={calculateReadingTime}
                ></Blog>
            ))}
        </div>
    );
};


Blogs.propTypes = {
    addToBookmarks: PropTypes.func.isRequired,
    calculateReadingTime: PropTypes.func.isRequired,
};

export default Blogs;
