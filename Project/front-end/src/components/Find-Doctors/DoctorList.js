import React, { useState, useEffect } from "react";
import DoctorCard from "./DoctorCard";
import DoctorDetails from "./DoctorDetails";

const filterDoctors = (doctors, searchTerm, filterOption) => {
  let filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  switch (filterOption) {
    case "A to Z (name)":
      filteredDoctors.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "Z to A (name)":
      filteredDoctors.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "Popular listings":
      filteredDoctors.sort((a, b) => b.rating - a.rating);
      break;
    case "Random listings":
      for (let i = filteredDoctors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredDoctors[i], filteredDoctors[j]] = [
          filteredDoctors[j],
          filteredDoctors[i],
        ];
      }
      break;
    default:
      break;
  }

  return filteredDoctors;
};

const DoctorsList = ({ doctors, searchTerm, filterOption }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const filteredDoctors = filterDoctors(doctors, searchTerm, filterOption);

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  // Event listener to close the modal when clicking outside of it
  useEffect(() => {
    const closeDetails = (e) => {
      if (e.target.classList.contains("overlay")) {
        handleCloseDetails();
      }
    };

    // Add when the modal is shown and remove when it is hidden
    if (showDetails) {
      window.addEventListener("click", closeDetails);
    }

    return () => {
      window.removeEventListener("click", closeDetails);
    };
  }, [showDetails]); // Only re-run the effect if showDetails changes

  return (
    <>
      <div
        className={`overlay ${showDetails ? "active" : ""}`}
        onClick={handleCloseDetails}
      >
        <DoctorDetails
          doctor={selectedDoctor}
          className={`${showDetails ? "active" : ""}`}
        />
      </div>
      <div className="doctor-cards">
        {filteredDoctors.map((doctor, index) => (
          <div onClick={() => handleDoctorClick(doctor)} key={index}>
            <DoctorCard doctor={doctor} />
          </div>
        ))}
      </div>
    </>
  );
};

export default DoctorsList;
