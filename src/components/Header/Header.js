import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="bg-indigo-400">
      <nav className="md:flex justify-between md:px-20 px-5 py-3">
        <div>
          <h1 className="text-4xl text-white uppercase">Quiz of Coder</h1>
        </div>

        <div className="navitems md:flex align-middle text-white font-bold mt-10 md:mt-0">
          <NavLink className={({ isActive }) => isActive ? 'active' : undefined}
           to="/home"><span className="navLinks">Home</span></NavLink>
          <NavLink aria-disabled className="" to="/topics"><span className="navLinks ">Topics</span></NavLink>
          <NavLink className="" to="/statistics"><span className="navLinks">Statistics</span></NavLink>
          <NavLink className="" to="/blog"><span className="navLinks">Blog</span></NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
