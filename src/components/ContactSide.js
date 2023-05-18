import React from "react"
import "./ContactSide.css";

export default function ContactSide() {

    return (
        <>
        <section className="contact-side">
            <div className="row">
                <div className="col-md-12">
                    <h4 className="text-left text-light mb-3">Other Contact Infos:</h4>
                    <p className="address text-light"><span><i class="fa fa-map-marker" aria-hidden="true"></i></span> Address Here</p>
                    <p className="phone text-light"><span><i class="fa fa-phone" aria-hidden="true"></i></span>  09123456789</p>
                    <p className="email text-light"><span><i class="fa fa-envelope" aria-hidden="true"></i></span> ladydahny@gmail.com</p>
                </div>
            </div>
        </section>
        </>

    )
}