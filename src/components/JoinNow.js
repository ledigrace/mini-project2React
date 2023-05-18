import React from "react";
import "./JoinNow.css";

export default function JoinNow(){
    return(
        <>
        <div className="">
            <div className="row joinNowRow mb-5">
                <p className="joinNowTittle">Join us now</p>
                <p className="joinNowDesc text-center">Discover over 200+ magical artifacts, hunt deadly beasts with incredible strength and unique abilities.</p>
                <button type="button" className="btn btnDis mt-3">Shop Now</button>
            </div>
        </div>
        </>
    );
}