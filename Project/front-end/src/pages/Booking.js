import React, { useState, useEffect } from 'react';
import axios from '../services/axiosConfig'; // Ensure this path correctly points to your axios configuration


import {doctors} from '../components/Find-Doctors/doctorsData';
import BookingConfirm from '../components/Booking/BookingConfirm';

const Booking = () => {

  const todayDate = new Date().toISOString().split('T')[0];

  const [appointmentData, setAppointmentData] = useState({
    fullName: '',
    doctor: '',
    contactNo: '',
    reasonForVisit: '',
    dateOfAppointment: '',
    timeOfAppointment: ''
  });

  const [bookingStatus, setBookingStatus] = useState('');

  const [doctorsData, setDoctors] = useState(doctors);

  useEffect(() => {
    const fetchAppointmentData = async () => {
        const userEmail = localStorage.getItem('userEmail');
        console.log()
        if (!userEmail) {
            console.log("User email is not stored, cannot fetch appointmentData.");
            return;
        }
        try {
          const response = await axios.get(`/api/user/appointmentData/${userEmail}`);
          setAppointmentData(response.data);
        } catch (error) {
            console.error("There was an error fetching the user appointmentData", error);
        }
    };
    fetchAppointmentData();
}, []);

  const handleChange = (event) => {
      const { name, value } = event.target;
      setAppointmentData({ ...appointmentData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userEmail = localStorage.getItem('userEmail');
    // if (!userEmail) {
    //     console.error('User email is not stored, cannot update appointmentData.');
    //     return;
    // }
    try {
      // await axios.post(`/api/user/bookAppointment`, appointmentData);
      // setMessage('AppointmentData updated successfully.');
      setBookingStatus('Confirmed');
    } catch (error) {
        console.error('There was an error updating the appointmentData:', error);
        // setMessage('Failed to update appointmentData.');
    }
};

  return (
    <div className={styles.userProfileContainer}>
      <h2 className={styles.h2Profile}>Book Appointment</h2>
    {bookingStatus ? <BookingConfirm appointment={appointmentData}/> :
      <form onSubmit={handleSubmit} className={styles.formProfile}>
        <div className={styles.formGroup}>
          <label className={styles.labelProfile}>Full Name:</label>
          <input
            type="text"
            name="fullName"
            onChange={handleChange}
            value={appointmentData.fullName || ''}
            className={styles.inputProfile}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelProfile}>Contact No:</label>
          <input
            type="number"
            name="contactNo"
            onChange={handleChange}
            value={appointmentData.contactNo || ''}
            required
            className={styles.inputProfile}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelProfile}>Doctor:</label>
          <select
            name="doctor"
            value={appointmentData.doctor || ''}
            onChange={handleChange}
            className={styles.selectProfile}>
            <option value="">Select...</option>
            {doctorsData.map((doctor) => {
              return (
                <option value={doctor.name}>{doctor.name}</option>
              )
            })}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelProfile}>Select Date of Appointment:</label>
          <input
            type="date"
            name="dateOfAppointment"
            value={appointmentData.dateOfAppointment || ''}
            onChange={handleChange}
            className={styles.inputProfile}
            min={todayDate}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelProfile}>Select Time of Appointment:</label>
          <input
            type="time"
            name="timeOfAppointment"
            value={appointmentData.timeOfAppointment || ''}
            onChange={handleChange}
            className={styles.inputProfile}
            step="900"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelProfile}>Reason for Visit:</label>
          <input
            type="text"
            name="reasonForVisit"
            value={appointmentData.reasonForVisit || ''}
            onChange={handleChange}
            className={styles.inputProfile}
            required
          />
        </div>
        <button type="submit" className={styles.buttonProfile}>Save Changes</button>
      </form>
    }
    </div>
  )
}

export default Booking
