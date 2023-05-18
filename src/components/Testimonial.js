import React from "react";

import "./Testimonial.css";

import Star from "../images/star.png";
import playVid from "../images/playVid.png";

export default function Testimonial(){
    return(
        <>
        <div className="container testimonialCon">
            <div className="row">
                <div className="col-md-6">
                    <p className="testimonialTittle"> TESTIMONIAL</p>
                    <p className="testimonialDesc">Trusted by over 1M users around the world</p>
                </div>
                <div className="col-md-6">
                    <p>  <img className="starRating" src={Star} alt="BaseconImg"/></p>
                    <p className="testimonialReview">“Great! Compared to everything else I’ve ever used, this is the best technology. Mas maganda pa to sa Lazada mga sis!”</p>
                    <p className="testimonialCusName">Lady Dahny</p>
                    <p className="testimonialCus">Customer</p>
                </div>
            </div>

        <div className="row playVid">
        <img className="playVidPic" src={playVid} alt="BaseconImg"/>         
        </div>

        </div>

        </>
    );
}