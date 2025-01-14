import React from "react";
import Bookmark from "../Bookmark/Bookmark";

import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 shadow-lg space-y-5 p-7">
            <h4 className="text-xl font-semibold italic shadow-lg p-5 rounded-lg bg-slate-300">
                Reading Time: {readingTime} minutes
            </h4>
            <h4 className="text-2xl font-semibold italic underline">
                Bookmarked Blogs: {bookmarks.length}
            </h4>
            {bookmarks.map((bookmark, index) => (
                <Bookmark key={index} bookmark={bookmark}></Bookmark>
            ))}
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
