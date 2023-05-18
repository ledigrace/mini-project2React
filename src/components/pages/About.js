import React from 'react';
import AboutHeader from '../AboutHeader';
import Basecon from '../Basecon';
import Feature from '../Feature';
import BattleCollection from '../BattleCollection';
import RegNow from '../RegNow';
import Testimonial from '../Testimonial';
import JoinNow from '../JoinNow';
import Stats from '../Stats';
import FooterSec from '../FooterSec';


function Shop() {
    return (
        <>
        <AboutHeader />
        <div className="container-fluid toP">
            <Basecon />
        </div>

        <div className="container-fluid featuresBg">
            <Feature/>
        </div>
        
        <div className="container-fluid battleCollectionBG">
            <BattleCollection />
        </div>
        <FooterSec />
        </>
    );
}
export default Shop;