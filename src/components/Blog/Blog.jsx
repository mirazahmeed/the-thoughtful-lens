import React from "react";
import PropTypes from "prop-types";

const Blog = ({ blog }) => {
    const {
        title,
        cover,
        posted_date,
        author,
        author_img,
        reading_time,
        hashtags,
    } = blog;
    return (
        <div className="mb-16">
            <img src={cover} alt={`cover picture of the ${title}`} />
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <img
                        className="w-16 h-16 rounded-full"
                        src={author_img}
                        alt=""
                    />
                    <div className="">
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h3 className="text-2xl">{title}</h3>
            <p>
                {hashtags.map((hash, idx) => (
                    <span key={idx} className="">
                        <a href="">{hash}</a>
                    </span>
                ))}
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
};

export default Blog;
