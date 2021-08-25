import React from 'react';

const Header = () => {
    return (
        <nav className="light-blue accent-1">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">React shop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/AnastasyaZhuk/react-shop">Repo</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;