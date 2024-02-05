import React, { useState } from 'react';
import { Link } from 'react-router-dom'


export function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav>
            <button className="menu-button" onClick={() => setToggleMenu(!toggleMenu)}>Menu</button>
            {toggleMenu && (
            <div className="nav-list">
                <li className="nav-li"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-li"><Link to="/Goals" className="nav-link">My Goals</Link></li>
                <li className="nav-li"><Link to="/Lists" className="nav-link">My Lists</Link></li>
                <li className="nav-li"><Link to="/Progress" className="nav-link">My Progress</Link></li>
            </div>
            )}
        </nav>
    )
}

export default Navbar