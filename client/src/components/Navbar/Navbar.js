import React from 'react'
import {Link} from "react-router-dom"
import {FaUser,FaQuestion,FaBlog, FaShoppingCart} from "react-icons/fa"
import { Weather } from "../Weather/Weather.js"

import "./Navbar.css"

const Navbar = () => {




    return (
        <div className="navbar">
            <h3 className="navh3">
                THE NAV
            </h3>
            <Weather/>

            <ul className="navLinkList">
                <li  className="navItem">
                    <Link className="navLink" to="/">
                        <FaQuestion className="questionLink"/>
                        <FaUser className="nav-icon"/>
                    </Link>
                </li>
                <li  className="navItem">
                    <Link className="navLink" to="/grocery">
                        <FaQuestion className="questionLink"/>
                        <FaShoppingCart className="nav-icon"/>
                    </Link>
                </li>
                <li  className="navItem">
                    <Link className="navLink" to="/messageboard">
                        <FaQuestion className="questionLink"/>
                        <FaBlog className="nav-icon"/>
                    </Link>
                </li>
            </ul>
            
        </div>
    )
}

export default Navbar
