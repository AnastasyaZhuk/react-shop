import React from 'react';

const Header = () => {
    return (
        <nav className="blue darken-4">
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