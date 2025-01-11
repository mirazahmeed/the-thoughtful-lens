// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

const App = () => {
    return (
        <>
            <Header></Header>

            <div className="md:flex">
                <Blogs></Blogs>
                <Bookmarks></Bookmarks>
            </div>
        </>
    );
};

export default App;
