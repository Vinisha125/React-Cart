import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './component/Form';
import UserDetails from './component/UserDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/user-details" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

