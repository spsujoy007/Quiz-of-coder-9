import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/topics">Topics</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
            <NavLink to="/blog">Blog</NavLink>
        </div>
    );
};

export default Header;