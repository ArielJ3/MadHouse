import React, { useState } from 'react';
import logo from './logo.svg';
import './dropdown.css';

const Dropdown = () => {
  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);

  // Dropdown options
  const regions = ["Region 1", "Region 2", "Region 3", "Region 4"];

  // Function to toggle dropdown
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Function to handle selection
  const handleSelect = (region) => {
    setSelectedRegion(region);
    setIsOpen(false); // Optionally close the dropdown on selection
  }

  return (
    <div className="dropdown">
      <button className="button" onClick={toggleDropdown}>
        <div className="text">
          <p className="text-1">{selectedRegion || "Select A Region"}</p>
        </div>
        <div className="icon-set-2">
          <img src={logo} alt="Icon" />
        </div>
      </button>
      {isOpen && (
        <div className="dropdown-content show">
          {regions.map((region, index) => (
            <div key={index} className="dropdown-item" onClick={() => handleSelect(region)}>
              {region}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Dropdown;

