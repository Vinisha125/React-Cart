

import React from 'react';
import { useLocation } from 'react-router-dom';
import './UserDetails.css';

const UserDetails = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const age = queryParams.get('age');
  const email = queryParams.get('email');

  return (
    <div className="user-details-container">
      <h1 className="user-details-heading">User Details</h1>
      <div className="user-details-label">
        <strong>Name:</strong>
      </div>
      <div className="user-details-value">{name}</div>
      <div className="user-details-label">
        <strong>Age:</strong>
      </div>
      <div className="user-details-value">{age}</div>
      <div className="user-details-label">
        <strong>Email:</strong>
      </div>
      <div className="user-details-value">{email}</div>
    </div>
  );
};

export default UserDetails;
