import React from "react";
import PropTypes from "prop-types";

const Blog = ({ blog }) => {
    const { title, cover } = blog;
    return (
        <div>
            <img src={cover} alt="" />
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
};

export default Blog;
