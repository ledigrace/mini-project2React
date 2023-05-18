import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./HeroSection.css";
import TopMainBG from "../images/topMainBG.png";
import TopMain from "../images/topMain.png";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/shop"); // Replace "/shop" with the actual path of your Shop.js component
  };

  return (
    <>
      <section id="hero">
        <div className="container heroSection">
          <div className="row">
            <div className="col-md-6 ps-5">
              <p className="playCollect">BUY MERCH ONLINE</p>
              <p className="sloGan">Welcome to the magical world of Lady Dahny</p>
              <p className="subSlogan">
                Discover over 200+ magical artifacts, hunt deadly beasts with incredible strength and unique abilities
              </p>
              <button type="button" className="btn btnDis mt-3" onClick={handleShopNow}>
                Shop Now
              </button>

              <div className="row mt-5 names">
                <div className="col-md-6 gD">Grace</div>
                <div className="col-md-6 gD">Dahn</div>
              </div>
            </div>

            <div className="col-md-6 mb-5 hero-photos">
              <div className="row mb-3">
                <img className="topSide" src={TopMainBG} alt="Main Character" />
                <img className="imgBG" src={TopMain} alt="Main Character" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
