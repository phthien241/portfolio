import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="w-full h-24 flex items-center justify-between px-12">
        <ul className="navbar flex text-lg font-semibold mx-auto">
          <li className="mr-12">
            <Link className="text-lg font-semibold" to="/">
              Home
            </Link>
          </li>
          <li className="mr-12">
            <Link className="text-lg font-semibold" to="/profile">
              About me
            </Link>
          </li>
          <li className="mr-12">
            <Link className="text-lg font-semibold" to="/skills">
              Skills
            </Link>
          </li>
          <li className="">
            <Link className="text-lg font-semibold" to="/projects">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
