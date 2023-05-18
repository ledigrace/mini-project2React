import React, { useState } from 'react';
import $ from 'jquery';
import "./ContactUs.css";

function SubForm(e, setError) {
    e.preventDefault();
    $.ajax({
        url: 'https://api.apispreadsheets.com/data/sq53fz05q8NRHC2v/',
        type: 'post',
        data: $('#myForm').serializeArray(),
        success: function () {
            alert('Form Data Submitted :)');
        },
        error: function () {
            setError('There was an error :(');
        },
        });
    }

export default function ContactUs() {
    const [error, setError] = useState('');

    function handleSubmit(e) {
      // Perform validation
    const form = $('#myForm')[0];
    const name = form['full_name'].value;
    const email = form['email'].value;
    const phone = form['phone'].value;
    const message = form['message'].value;

    if (!name || !email || !phone || !message) {
        setError('Please fill out all fields.');
        return;
    }

    SubForm(e, setError);
}

    return (
    <>
    <section id="contact">
        <div className="container">
            <div className="row mt-5">
            <div className="col-md-12">
                <div className="contact">
                    <h2 className="section-header text-center text-light mb-5">CONTACT US</h2>
                    <form id="myForm">
                        <div className="form-group mb-5">
                            <label htmlFor="full_name">Full Name:</label>
                            <input type="text" name="full_name" className="form-control" id="full_name" />
                        </div>
                        <div className="form-group mb-5">
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group mb-5">
                            <label htmlFor="phone">Phone:</label>
                            <input type="tel" name="phone" className="form-control" id="phone" />
                        </div>
                        <div className="form-group mb-5">
                            <label htmlFor="message">Message:</label>
                            <br />
                            <textarea name="message" id="message" cols="78" />
                        </div>
                        <br />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <br />
                    </form>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
    );
}