import React from "react";

import "./BattleCollection.css";

import BattleCollectPic1 from "../images/battleCollectPic1.png"
import BattleCollectPic2 from "../images/battleCollectPic2.png"

export default function BattleCollection(){
    return(
        <>
            <div className="container  battleCollection">
            <div className="row">
                <div className="col-md-6">
                <img src={BattleCollectPic1} class="BattleCollectPic1Img" alt="..."/>
                </div>
                <div className="col-md-6">
                    <p className="BattleCollectionTittle">Battle</p>
                    <h2 className="BattleCollectionFind">Find and fight rare creatures</h2>
                    <p className="BattleCollectionDesc">Discover over 200+ magical artifacts, hunt the deadly beasts that rule this magical world, each with magical powers and unique abilities. Train and unite your wizards into powerful guilds to increase their power and value to you to create the perfect team.</p>
                    <button type="button" className="btn btnDis mt-3">Shop Now</button>
                
                </div>
            </div>

            <div className="row battleCollectionRow2">
            <div className="col-md-6">
                    <p className="BattleCollectionTittle">MERCH COLLECTIONS</p>
                    <h2 className="BattleCollectionFind2">Collect stunning pieces of digital world</h2>
                    <p className="BattleCollectionDesc">Discover over 200+ magical artifacts, hunt the deadly beasts that rule this magical world, each with magical powers and unique abilities. Train and unite your wizards into powerful guilds to increase their power and value to you to create the perfect team.</p>
                
                </div>

                <div className="col-md-6">
                <img src={BattleCollectPic2} class="img-fluid" alt="..."/>
                </div>


            </div>



            </div>
      
        </>
    );
}