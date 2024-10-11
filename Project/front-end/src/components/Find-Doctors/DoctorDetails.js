import React from "react";
import "./styles.css";

const DoctorDetails = ({ doctor, className }) => {
  if (!doctor) {
    return null;
  }

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const generateGoogleMapsUrl = (location) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      location
    )}`;
  };

  return (
    <div className={`doctorDetails ${className}`} onClick={stopPropagation}>
      <img
        src={doctor.image_url}
        alt={`Profile of ${doctor.name}`}
        height={400}
        width={400}
        draggable={false}
      />
      <h3>{doctor.name}</h3>
      <p>{doctor.specialty}</p>
      <p>{doctor.location}</p>
      <p>{doctor.bio}</p>
      <p className="details-rating">{`Experience: ${doctor.experience} years`}</p>
      <a
        href={generateGoogleMapsUrl(doctor.location)}
        target="_blank"
        rel="noopener noreferrer"
        className="location"
      >
        <button className="locate-button">
          <svg
            class="svgIcon"
            viewBox="0 0 512 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
          </svg>
          Locate
        </button>
      </a>
    </div>
  );
};

export default DoctorDetails;
