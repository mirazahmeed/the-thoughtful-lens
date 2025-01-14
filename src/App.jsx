// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

const App = () => {
    const [bookmarks, setBookmarks] = useState([]);

    const addToBookmarks = (blog) => {
        setBookmarks([...bookmarks, blog]);
    };

    const [readingTime, setReadingTime] = useState(0);

    const calculateReadingTime = (time, id) => {
        setReadingTime(readingTime + time);

        // remove bookmarks
        const filteredBookmarks = bookmarks.filter(
            (bookmark) => bookmark.id !== id
        );
        setBookmarks(filteredBookmarks);
    };

    return (
        <>
            <Header></Header>

            <div className="md:flex container mx-auto gap-10 mt-5">
                <Blogs
                    calculateReadingTime={calculateReadingTime}
                    addToBookmarks={addToBookmarks}
                ></Blogs>
                <Bookmarks
                    readingTime={readingTime}
                    bookmarks={bookmarks}
                ></Bookmarks>
            </div>
        </>
    );
};

export default App;
