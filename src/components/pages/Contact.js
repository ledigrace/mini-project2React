import React from 'react';
import ContactHeader from '../ContactHeader';
import ContactSide from '../ContactSide';
import ContactUs from '../ContactUs';
import ContactMap from '../ContactMap';
import FooterSec from '../FooterSec';


function Contact() {
    return (
        <>
        <ContactHeader />
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <ContactUs />
                </div>
                <div className='col-md-6'>
                    <ContactSide />
                    <ContactMap />
                </div>
            </div>
        </div>
        
        <FooterSec />
        </>
    );
}
export default Contact;