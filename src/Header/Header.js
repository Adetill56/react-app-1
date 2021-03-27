import React from 'react';

import './Header.css';

import { BrowserRouter as Router, Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="header__container container">
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__list-item"><Link to="/">Main</Link></li>
                        <li className="header__list-item"><Link to="/list">List</Link></li>
                        <li className="header__list-item"><Link to="/user">User</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;