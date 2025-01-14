import React from "react";
import PropTypes from "prop-types";
import { FaBookBookmark } from "react-icons/fa6";

const Blog = ({ blog, addToBookmarks }) => {
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
        <div className="mb-16 space-y-4 shadow-lg p-10 rounded-xl">
            <img
                className="w-full"
                src={cover}
                alt={`cover picture of the ${title}`}
            />
            <div className="flex justify-between ">
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
                <div className="flex gap-4 items-center">
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => addToBookmarks(blog)}
                        className="text-2xl text-blue-500"
                    >
                        <FaBookBookmark />
                    </button>
                </div>
            </div>
            <h3 className="text-2xl">{title}</h3>
            <p className="flex gap-3 text-gray-600">
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
    addToBookmarks: PropTypes.func.isRequired,
};

export default Blog;
