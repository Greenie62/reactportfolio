import React from 'react'
import {FaReact} from "react-icons/fa"

import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <h1 className="headerh1">Welcome to my...</h1>
            <h3 className="headerh3">React Demo <FaReact/>  </h3>
        </div>
    )
}

export default Header
