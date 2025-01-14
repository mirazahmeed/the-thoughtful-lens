import React from "react";

import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="">
            <div className="shadow-2xl p-7 rounded-lg">
                <h4 className="text-xl">{title}</h4>
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
