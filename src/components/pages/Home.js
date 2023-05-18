import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Basecon from '../Basecon';
import Feature from '../Feature';
import BattleCollection from '../BattleCollection';
import RegNow from '../RegNow';
import Testimonial from '../Testimonial';
import JoinNow from '../JoinNow';
import Stats from '../Stats';
import FooterSec from '../FooterSec';

function Home() {
    return (
        <>
        <div className="container-fluid toP"> 
            <HeroSection />
            <Basecon />
        </div>

        <div className="container-fluid featuresBg">
            <Feature/>
        </div>
        
        <div className="container-fluid battleCollectionBG">
            <BattleCollection />
        </div>

        <div className="container regNow">
            <RegNow />
        </div>

        <div className="container-fluid featuresBg">
            <Stats />
            <Testimonial />
            
        </div>

        <div className="container joinNowCon">
            <JoinNow />
        </div>

        
        <FooterSec />
        </>
    );
}

export default Home;