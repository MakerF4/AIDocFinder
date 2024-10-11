import React, { useState, useEffect } from "react";
import "./styles.css";
import Searchbar from "./Searchbar";
import DoctorsList from "./DoctorList";
import axios from "axios";

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("All");
  const [doctors, setDoctors] = useState([]);

  const handleFilterChange = (filterValue) => {
    console.log("Selected Filter:", filterValue);
    setFilterOption(filterValue);
  };

  const handleSearchChange = (searchValue) => {
    setSearchTerm(searchValue);
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:3001/fetch-doctors", {
          params: {
            searchTerm,
            filterOption,
          },
        });
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors: ", error);
      }
    };

    fetchDoctors();
  }, [searchTerm, filterOption]);

  return (
    <>
      <div className="doctor-container">
        <div>
          <h1 className="doctor-title">
            Find your best healthcare professional
          </h1>
        </div>
        <Searchbar
          onFilterChange={handleFilterChange}
          onSearchChange={handleSearchChange}
        />
      </div>
      <DoctorsList
        doctors={doctors}
        searchTerm={searchTerm}
        filterOption={filterOption}
      />
    </>
  );
};

export default Doctors;
