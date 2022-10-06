import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* Container wrapper */}
            <div className="container-fluid">
                {/* Toggle button */}
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars" />
                </button>
                {/* Collapsible wrapper */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* Navbar brand */}
                <Link className="navbar-brand mt-2 mt-lg-0" to="/Home">
                    <img src="./src/assets/logo.png" height={15} alt="Guitar Store" loading="lazy" />
                </Link>
                {/* Left links */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" to="/Electric">Electric Guitar</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Acoustic">Acoustic Guitar</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Bass">Bass Guitar</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Ukulele">Ukulele</Link>
                    </li>
                </ul>
                {/* Left links */}
                </div>
                {/* Collapsible wrapper */}
                {/* Right elements */}
                <div className="d-flex align-items-center">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" to="/Cart">Shopping Cart</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Signup">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Login">Login</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Logout">Logout</Link>
                    </li>
                </ul>
                </div>
                {/* Right elements */}
            </div>
            {/* Container wrapper */}
            </nav>
            </div>
        )
    }
}
