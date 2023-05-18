import React, { useState, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import $ from 'jquery';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import "./LoginFormComp.css";

function SubFormLogin(e, setError, setIsLoggedIn) {
  e.preventDefault();
  $.ajax({
    url: 'https://api.apispreadsheets.com/data/IO2kaF19XyvzB2UZ/',
    type: 'get',
    data: $('#loginForm').serializeArray(),
    success: function (data) {
        const queryResult = data['data'];
        if (queryResult.length > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          setError('Invalid email or password');
        }
      },
      
    error: function () {
      setError('There was an error :(');
    },
  });
}

const LoginForm = () => {

  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // add a state variable for isLoggedIn
  const navigate = useNavigate();
  const formRef = useRef(null);

  async function handleSubmitLogin(e) {
    e.preventDefault();
  
    // Perform validation
    const form = $('#loginForm')[0];
    const email = form['email'].value;
    const password = form['password'].value;
  
    if (!email || !password) {
      setError('Please fill out all fields.');
      return;
    }
  
    // Check if email and password match existing data
    const query = `select * where Email='${email}' and Password='${password}'`;
    const url = `https://api.apispreadsheets.com/data/IO2kaF19XyvzB2UZ/?query=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const data = await response.json();
  
    // Submit form data
    if (data.data.length > 0) {
      SubFormLogin(e, setError, setIsLoggedIn);
      navigate('/'); // navigate to success page
      formRef.current.reset();
    } else {
      setError('Invalid email or password');
    }
  }
  // render the modal only if isLoggedIn is false
  return (
    <>
  <div className='container'>
    <div className='row'>
      <div className='col-md-12 log-form'>
      {!isLoggedIn && (
        <Form id="loginForm" ref={formRef} style={{ color: 'red', fontFamily: 'Raleway, sans-serif,' }}>
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
          {error && <div className="error">{error}</div>}
          <Button className='btnDis' type="submit" onClick={handleSubmitLogin}>
            Login
          </Button>
        </Form>
      )}
      </div>
    </div>
  </div>
    </>
  );
};

export default LoginForm;
