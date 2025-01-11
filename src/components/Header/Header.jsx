import React from "react";
import Profile from "../../assets/images/profile.png";

const Header = () => {
    return (
        <div className="flex justify-between items-center p-4 mx-4 border-b-2">
            <h1 className="text-2xl">The Thoughtful Lens</h1>
            <img src={Profile} alt="Profile" className="w-20 h-20 rounded-full" />
        </div>
    );
};

export default Header;
