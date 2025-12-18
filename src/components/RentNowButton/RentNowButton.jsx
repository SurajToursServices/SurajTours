
import React, { useState } from 'react';
import RentNowModal from '../RentNowModal/RentNowModal';
import emailjs from 'emailjs-com';


const RentNowButton = ({ carName, className = '', children }) => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    car: carName || '',
    startDate: '',
    endDate: '',
    pickupLocation: '',
    dropoffLocation: '',
    license: '',
    notes: '',
  });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_4wzrzxj', 'template_ccovevq', {
      email: form.email,
      name: form.name,
      phone: form.phone,
      car: form.car,
      startDate: form.startDate,
      endDate: form.endDate,
      pickupLocation: form.pickupLocation,
      dropoffLocation: form.dropoffLocation,
      license: form.license,
      notes: form.notes
  }, 'S2_28wfbwpIQ3uDMu')
      .then((result) => {
        alert('Your rental request has been submitted! We will confirm your booking via email.');
        setShowModal(false);
        setForm({ name: '', email: '', phone: '', car: carName || '', startDate: '', endDate: '', pickupLocation: '', dropoffLocation: '', license: '', notes: '' });
      }, (error) => {
        alert('There was an error submitting your request. Please try again.');
      });
  };

  return (
    <>
      <button className={className} onClick={() => setShowModal(true)}>
        {children}
      </button>
      <RentNowModal
        show={showModal}
        onClose={() => setShowModal(false)}
        carName={carName}
        form={form}
        onFormChange={handleFormChange}
        onFormSubmit={handleFormSubmit}
      />
    </>
  );
};

export default RentNowButton;
