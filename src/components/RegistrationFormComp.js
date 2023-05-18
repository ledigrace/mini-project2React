import React, { useState, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import $ from 'jquery';
import Swal from 'sweetalert2';
import { useNavigate} from 'react-router-dom';
import "./RegistrationFormComp.css";

function SubFormReg(e, setError) {
  e.preventDefault();
  $.ajax({
    url: 'https://api.apispreadsheets.com/data/IO2kaF19XyvzB2UZ/',
    type: 'post',
    data: $('#regForm').serializeArray(),
    success: function () {
      Swal.fire({
        icon: 'success',
        title: 'Form Data Submitted :)',
        showConfirmButton: false,
        timer: 1500
      });
      
    },
    error: function () {
      setError('There was an error :(');
    },
  });
}

const RegistrationForm = () => {

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const formRef = useRef(null);

  async function handleSubmitReg(e) {
    e.preventDefault();
  
    // Perform validation
    const form = $('#regForm')[0];
    const name = form['name'].value;
    const email = form['email'].value;
    const password = form['password'].value;
    const cpassword = form['cpassword'].value;
  
    if (!name || !email || !password || !cpassword) {
      setError('Please fill out all fields.');
      return;
    }
  
    if (password !== cpassword) {
      setError('Passwords do not match.');
      return;
    }
  
    // Check if data already exists
    const query = `select * where name='${name}' and email='${email}'`;
    const url = `https://api.apispreadsheets.com/data/IO2kaF19XyvzB2UZ/?query=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const data = await response.json();
  
    if (data.data.length > 0) {
      setError('Data already exists.');
      return;
    }
  
    // Submit form data
    SubFormReg(e, setError);
    navigate('/login-form'); // navigate to success page
    formRef.current.reset();
  }
  

  return (
<section>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 reg-form'>
          <Form id="regForm" ref={formRef} style={{ color: 'red', fontFamily: 'Raleway, sans-serif,' }}>
          <Form.Group controlId="formName">
            <Form.Label className='f-label'>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              id="name"
              required
            />
          </Form.Group>
          <br></br>
          <Form.Group controlId="formEmail">
            <Form.Label className='f-label'>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="email"
              required
            />
          </Form.Group>
          <br></br>
          <Form.Group controlId="formPassword">
            <Form.Label className='f-label'>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password"
              required
            />
          </Form.Group>
          <br></br>
          <Form.Group controlId="formCPassword">
            <Form.Label className='f-label'>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="cpassword"
              id="cpassword"
              required
            />
          </Form.Group>
          <br></br>
          {error && <div className="error">{error}</div>}
          <Button className='btnDis' type="submit" onClick={handleSubmitReg}>
            Register
          </Button>
        </Form>
        </div>
      </div>
    </div>
  </section>
  );
};

export default RegistrationForm;
