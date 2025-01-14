// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

const App = () => {

    const [bookmarks, setBookmarks] = useState([]);

    const addToBookmarks = blog => {
        setBookmarks([...bookmarks, blog]);
        
    }

    return (
        <>
                <Header></Header>

                <div className="md:flex container mx-auto gap-10">
                    <Blogs addToBookmarks={addToBookmarks}></Blogs>
                    <Bookmarks bookmarks={bookmarks}></Bookmarks>
                </div>
        </>
    );
};

export default App;
