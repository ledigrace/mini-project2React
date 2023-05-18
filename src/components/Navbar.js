import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css';
// import { Button } from './Button';

function Navbar() {
    return (
        <>
        <div className="row">
            <div className="container mb-5">
                <div className="col-md-12">
                    <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand text-light textLogo" href="#">Lady Dahny</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link to="/" class="nav-link navLink">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="shop" class="nav-link navLink">Shop</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" class="nav-link navLink">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class="nav-link navLink">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/registration-form" class="nav-link navLink">Register</Link>
                            </li>
                            <li class="nav-item li-btnLogin">
                                <Link to="/login-form" class="btnLogin">Login</Link>
                            </li>
                        </ul>
                    </div>
                    </nav>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
