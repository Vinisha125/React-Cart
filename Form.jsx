

import React, { useState, useEffect } from 'react';
import './form.css';
import { FaExclamationCircle } from 'react-icons/fa';


const FormValidation = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    if (name !== '') {
      if (!isNameCapitalized(name)) {
        setNameError('Name should start with a capital letter');
      } else {
        setNameError('');
      }
    }
  }, [name]);

  useEffect(() => {
    if (age !== '') {
      const parsedAge = parseInt(age);
      if (isNaN(parsedAge) || parsedAge <= 18) {
        setAgeError('Age must be greater than 18');
      } else {
        setAgeError('');
      }
    }
  }, [age]);

  useEffect(() => {
    if (email !== '') {
      if (!email.includes('@')) {
        setEmailError('Email is invalid');
      } else {
        setEmailError('');
      }
    }
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '') {
      setNameError('Name is required');
    }

    if (age === '') {
      setAgeError('Age is required');
    }

    if (email === '') {
      setEmailError('Email is required');
    }

    if (name && age && email) {
      
      

      
      

      window.location.href = `/user-details?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}&email=${encodeURIComponent(email)}`;

    }
  };

  const isNameCapitalized = (name) => {
    const firstLetter = name.charAt(0);
    return firstLetter === firstLetter.toUpperCase();
  };

  return (
    <div className='container'>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && (
            <span className="error">
              <FaExclamationCircle className="error-icon" />
              <span className="error-message">{nameError}</span>
            </span>
          )}
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {ageError && (
            <span className="error">
              <FaExclamationCircle className="error-icon" />
              <span className="error-message">{ageError}</span>
            </span>
          )}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <span className="error">
              <FaExclamationCircle className="error-icon" />
              <span className="error-message">{emailError}</span>
            </span>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormValidation;


