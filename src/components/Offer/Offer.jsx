import React, { useState } from 'react';
import styles from './Offer.module.css';
import RentNowModal from '../RentNowModal/RentNowModal';
import emailjs from 'emailjs-com';

const Offer = () => {
	const [showModal, setShowModal] = useState(false);
	const [form, setForm] = useState({
		name: '',
		email: '',
		phone: '',
		car: 'Special Offer',
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
				setForm({ name: '', email: '', phone: '', car: 'Special Offer', startDate: '', endDate: '', pickupLocation: '', dropoffLocation: '', license: '', notes: '' });
			}, (error) => {
				alert('There was an error submitting your request. Please try again.');
			});
	};

	return (
		<section className={`${styles.offer} section`}>
			<div className={`${styles['offer-container']} bd-grid`}>
				<div className={styles['offer-data']}>
					<span className={styles['offer-subtitle']}>Limited Time Special</span>
					<h3 className={styles['offer-title']}>20% OFF</h3>
					<p className={styles['offer-description']}>Weekly rentals - Save big on extended stays. Minimum 7 day rental required.</p>
					<button className="button" onClick={() => setShowModal(true)}>Book Now</button>
				</div>
				<div className={styles['offer-image']}>
					<img src="https://pngimg.com/d/mercedes_PNG80135.png" alt="Special Offer" className={styles['offer-img']} />
				</div>
			</div>
			{showModal && (
				<div style={{position:'absolute',top:0,left:0,width:'100vw',height:'100vh',zIndex:1000}}>
					<div style={{position:'absolute',top:'30px',right:'30px',background:'#ff4d4f',color:'#fff',padding:'0.5rem 1.5rem',borderRadius:'2rem',fontWeight:'bold',fontSize:'1.2rem',zIndex:1001,boxShadow:'0 2px 8px rgba(0,0,0,0.1)'}}>20% OFF</div>
					<RentNowModal
						show={showModal}
						onClose={() => setShowModal(false)}
						carName={form.car}
						form={form}
						onFormChange={handleFormChange}
						onFormSubmit={handleFormSubmit}
					/>
				</div>
			)}
		</section>
	);
};

export default Offer;