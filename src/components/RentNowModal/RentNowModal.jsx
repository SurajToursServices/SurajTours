
import React from 'react';
import styles from './RentNowModal.module.css';


const RentNowModal = ({ show, onClose, carName, form = {}, onFormChange, onFormSubmit }) => {
  if (!show || !form) return null;
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        <h2>Rent This Car</h2>
        <form onSubmit={onFormSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" placeholder="Your Name" value={form.name || ''} onChange={onFormChange} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="Email" value={form.email || ''} onChange={onFormChange} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" placeholder="Phone Number" value={form.phone || ''} onChange={onFormChange} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="car">Car</label>
              <input id="car" name="car" placeholder="Car" value={form.car || ''} onChange={onFormChange} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="startDate">Start Date</label>
              <input id="startDate" name="startDate" type="date" value={form.startDate || ''} onChange={onFormChange} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="endDate">End Date</label>
              <input id="endDate" name="endDate" type="date" value={form.endDate || ''} onChange={onFormChange} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="pickupLocation">Pickup Location</label>
              <input id="pickupLocation" name="pickupLocation" placeholder="Pickup Location" value={form.pickupLocation || ''} onChange={onFormChange} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="dropoffLocation">Drop-off Location</label>
              <input id="dropoffLocation" name="dropoffLocation" placeholder="Drop-off Location" value={form.dropoffLocation || ''} onChange={onFormChange} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="license">Driver's License Number</label>
              <input id="license" name="license" placeholder="Driver's License Number" value={form.license || ''} onChange={onFormChange} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="notes">Additional Notes</label>
              <textarea id="notes" name="notes" placeholder="Any special requests?" value={form.notes || ''} onChange={onFormChange} rows={2} style={{resize:'vertical'}} />
            </div>
          </div>
          <button type="submit" className={styles.submitBtn}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RentNowModal;
