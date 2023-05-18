import React from "react";

import "./Feature.css";
import FeaturesPic1 from "../images/featuresPic1.png"
import FeaturesPic2 from "../images/featuresPic2.png"
import FeaturesPic3 from "../images/featuresPic3.png"
import FeaturesPic4 from "../images/featuresPic4.png"
import FeaturesPic5 from "../images/featuresPic5.png"
import FeaturesPic6 from "../images/featuresPic6.png"


export default function Feature(){
    return(
        <>
        <div className="container featuresCon">
        <div className="row">
        <p className="featuresTittle">Features</p>
        <h2 className="featuresPte">Play to enjoy</h2>
        <p className="featuresDesc">Discover over 200+ magical artifacts, hunt deadly beasts with incredible strength and unique abilities.	</p>
        </div>
        
        <div className="row">

        <div className="col-md-4">
        <div className="featuresCard">
        <img src={FeaturesPic1} class="card-img-top featuresCard-img" alt="..."/>
        <div className="card-body">
        <h5 className="featuresCard-title">Collect crystals</h5>
        <p className="featuresCard-text">Discover over 200+ magical artifacts, hunt deadly beasts with incredible strength and unique abilities.</p>
        </div>
        </div>
        </div>

        <div className="col-md-4">
        <div className="featuresCard">
        <img src={FeaturesPic2} className="card-img-top featuresCard-img" alt="..."/>
        <div className="card-body">
        <h5 className="featuresCard-title">Fight creatures</h5>
        <p className="featuresCard-text">Discover over 200+ magical artifacts, hunt deadly beasts with incredible strength and unique abilities.</p>
        </div>
        </div>
        </div>

        <div className="col-md-4">
        <div className="featuresCard">
        <img src={FeaturesPic3} className="card-img-top featuresCard-img" alt="..."/>
        <div className="card-body">
        <h5 className="featuresCard-title">Learn potions</h5>
        <p className="featuresCard-text">Discover over 200+ magical artifacts, hunt deadly beasts with incredible strength and unique abilities.</p>
        </div>
        </div>
        </div>
        </div>

        <div className="row mt-4">

<div className="col-md-4">
<div className="featuresCard">
<img src={FeaturesPic4} class="card-img-top featuresCard-img" alt="..."/>
<div className="card-body">
<h5 className="featuresCard-title">Look for artifacts</h5>
<p className="featuresCard-text">Discover over 200+ magical artifacts, hunt deadly beasts with incredible strength and unique abilities.</p>
</div>
</div>
</div>

<div className="col-md-4">
<div className="featuresCard">
<img src={FeaturesPic5} className="card-img-top featuresCard-img" alt="..."/>
<div className="card-body">
<h5 className="featuresCard-title">Find creatures</h5>
<p className="featuresCard-text">Discover over 200+ magical artifacts, hunt deadly beasts with incredible strength and unique abilities.</p>
</div>
</div>
</div>

<div className="col-md-4">
<div className="featuresCard">
<img src={FeaturesPic6} className="card-img-top featuresCard-img" alt="..."/>
<div className="card-body">
<h5 className="featuresCard-title">Collect herbs</h5>
<p className="featuresCard-text">Discover over 200+ magical artifacts, hunt deadly beasts with incredible strength and unique abilities.</p>
</div>
</div>
</div>
</div>

        </div>

        
        </>
        
        );
    }