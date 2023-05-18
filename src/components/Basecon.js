import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Basecon.css"
import BaseconImg from "../images/baseConImg.png";
import RockMan from "../images/rockMan.png";

export default function Basecon() {
    const navigate = useNavigate();

    const handleShopNow = () => {
      navigate("/shop"); // Replace "/shop" with the actual path of your Shop.js component
    };
    return(
        <div>
            <section id="about">
                <div className="container-fluid">
                    <div className="row baseConContainer">
                        <div className="col-md-6">
                            <div className="p-5">
                            <img className="baseconImgBG" src={BaseconImg} alt="BaseconImg"/>
                            <img className="rockMan" src={RockMan} alt="RockMan"/>
                            </div>
                        
                        </div>

                        <div className="col-md-6 p-5">
                            <p className="baseConcept">Base Concept</p>
                            <h2 className="baseConceptTittle">Merch collector and autobattler game</h2>
                            <p className="baseConceptDesc">Discover over 200+ magical artifacts, hunt the deadly beasts that rule 
                                this magical world, each with magical powers and unique abilities. 
                                Train and unite your wizards into powerful guilds to increase their power 
                                and value to you to create the perfect team.</p>
                                <button type="button" className="btn btnDis mt-3" onClick={handleShopNow}>Shop Now</button>
                        </div>
                    </div>
                </div>
            </section>
        
        </div>
        )
    }
    
    
    
    