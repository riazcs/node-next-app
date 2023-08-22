import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';

const Layout = ({ children }) => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark pl-4">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" href="/">Navbar</Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" href="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
