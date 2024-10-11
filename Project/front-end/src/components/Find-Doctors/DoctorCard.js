import React from "react";
import "./styles.css";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctorCard">
      <div className="doctorImage">
        <img
          src={doctor.image_url}
          alt={`Profile of ${doctor.name}`}
          draggable={false}
        />
      </div>
      <div className="doctorInfo">
        <h3 className="doctorName">{doctor.name}</h3>
        <p className="doctorSpecialty">{doctor.specialty}</p>
        <p className="doctorLocation">{doctor.location}</p>
        <div className="doctorRating">{`Experience: ${doctor.experience} years`}</div>
      </div>
    </div>
  );
};

export default DoctorCard;
