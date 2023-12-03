// Dashboard.js
import React from 'react';
import './dashboard.css'; // Importing the CSS file for styling
import './dropdown.css';
import Dropdown from './dropdown.js';

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Dashboard content goes here */}
      <h1>Dashboard</h1>
      {/* You can add more components or content here */}
        <Dropdown />
    </div>
  );
};

export default Dashboard;
