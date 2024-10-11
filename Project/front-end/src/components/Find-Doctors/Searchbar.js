import React, { useState, useEffect } from "react";

const Searchbar = ({ onFilterChange, onSearchChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // eslint-disable-next-line
  const [selectedOption, setSelectedOption] = useState("All");

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    onFilterChange(value);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen && !event.target.closest(".customDropdown")) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  return (
    <div className="searchBox">
      <input
        className="searchInput"
        type="text"
        name=""
        placeholder="Search by name..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <div className="customDropdown">
        <button className="setting-btn" onClick={handleDropdown}>
          <span class="filter-bar filter-bar1"></span>
          <span class="filter-bar filter-bar2"></span>
          <span class="filter-bar filter-bar1"></span>
        </button>
        {isDropdownOpen && (
          <div className="dropdownContent">
            <div onClick={() => handleOptionClick("All")}>All</div>
            <div onClick={() => handleOptionClick("A to Z (name)")}>
              A to Z (name)
            </div>
            <div onClick={() => handleOptionClick("Z to A (name)")}>
              Z to A (name)
            </div>
            <div onClick={() => handleOptionClick("Popular listings")}>
              Popular listings
            </div>
            <div onClick={() => handleOptionClick("Random listings")}>
              Random listings
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
