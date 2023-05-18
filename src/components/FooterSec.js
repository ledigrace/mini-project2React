import React from "react";

import "./FooterSec.css";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FooterSec() {
    return (
    <>
    <section className="footer-section">
        <div className="container">
            <div className="row footer">
                    <div className="col-md-3">
                        <div className="footer-logo">
                            <h1>Lady Dahny</h1>
                        </div>
                        <div className="footer-slogan">Welcome to the magical world of Lady Dahny</div>
                    </div>

                    <div className="col-md-3">
                        <div className="footer-about">
                            <h5>About The Shop</h5>
                            <p>lorem ipsmbhqiafhdiabfdiafd</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="footer-links">
                            <h5>Links</h5>
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link navLink" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link navLink" href="#">Shop</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link navLink" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link navLink" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="footer-contact">
                        <h5>Contact</h5>
                        <span><FontAwesomeIcon icon={faEnvelope} className="envelope"/> ladydahny@gmail.com</span>
                        </div>
                    </div>
            </div>

        </div>
        <div className="row sub-footer">
                <div className="col-md-12">
                    <div className="sub">
                        <p className="text-center text-light">Copyright ©2023 Lady Dahny Merch Shop</p>
                    </div>
                </div>
        </div>
    </section>
    </>
    );
}
