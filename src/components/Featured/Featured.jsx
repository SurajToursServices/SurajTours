import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Featured.module.css';
import RentNowModal from '../RentNowModal/RentNowModal';


const Featured = (props) => {
	const [showModal, setShowModal] = useState(false);
	const [selectedCar, setSelectedCar] = useState('');
	const [form, setForm] = useState({
		name: '',
		email: '',
		phone: '',
		car: '',
		startDate: '',
		endDate: '',
	});

	const handleRentClick = (carName) => {
		setSelectedCar(carName);
		setForm(f => ({ ...f, car: carName }));
		setShowModal(true);
	};

	const handleFormChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = (e) => {
			e.preventDefault();
			// Send email via EmailJS
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
						setForm({ name: '', email: '', phone: '', car: '', startDate: '', endDate: '' });
					}, (error) => {
						alert('There was an error submitting your request. Please try again.');
					});
	};

		return (
			<section className={styles.featured} id="featured">
				<div className="section-header">
					<span className="section-subtitle">Handpicked Selection</span>
					<h2 className="section-title">FEATURED VEHICLES</h2>
				</div>
				<div className={`${styles['featured-container']} bd-grid`}>
					{/* ...existing car cards... */}
					<article className={styles.vehicle}>
						<div className={`${styles['vehicle-badge']} ${styles.premium}`}>Premium</div>
						<img src="https://file.aiquickdraw.com/imgcompressed/img/compressed_b7e0a9a9580e2839ca4f782eda39ad41.webp" alt="BMW 3 Series" className={styles['vehicle-img']} />
						<div className={styles['vehicle-info']}>
							<div className={styles['vehicle-meta']}>
								<span className={styles['vehicle-name']}>BMW 3 Series</span>
								<span className={styles['vehicle-price']}>$99<span>/day</span></span>
							</div>
							<div className={styles['vehicle-features']}>
								<span><i className="bx bx-user"></i> 5 seats</span>
								<span><i className="bx bx-diamond"></i> Premium</span>
								<span><i className="bx bx-cog"></i> Automatic</span>
							</div>
							<button className="button button-small" onClick={() => handleRentClick('BMW 3 Series')}>Rent Now <i className="bx bx-right-arrow-alt button-icon"></i></button>
						</div>
					</article>
					<article className={styles.vehicle}>
						<div className={`${styles['vehicle-badge']} ${styles.popular}`}>Popular</div>
						<img src="https://pngimg.com/d/audi_PNG1736.png" alt="Audi A4" className={styles['vehicle-img']} />
						<div className={styles['vehicle-info']}>
							<div className={styles['vehicle-meta']}>
								<span className={styles['vehicle-name']}>Audi A4</span>
								<span className={styles['vehicle-price']}>$89<span>/day</span></span>
							</div>
							<div className={styles['vehicle-features']}>
								<span><i className="bx bx-user"></i> 5 seats</span>
								<span><i className="bx bx-diamond"></i> Premium</span>
								<span><i className="bx bx-cog"></i> Automatic</span>
							</div>
							<button className="button button-small" onClick={() => handleRentClick('Audi A4')}>Rent Now <i className="bx bx-right-arrow-alt button-icon"></i></button>
						</div>
					</article>
					<article className={styles.vehicle}>
						<div className={`${styles['vehicle-badge']} ${styles.family}`}>Family</div>
						<img src="https://www.pngplay.com/wp-content/uploads/7/Black-Car-Transparent-Background.png" alt="Volvo XC60" className={styles['vehicle-img']} />
						<div className={styles['vehicle-info']}>
							<div className={styles['vehicle-meta']}>
								<span className={styles['vehicle-name']}>Volvo XC60</span>
								<span className={styles['vehicle-price']}>$119<span>/day</span></span>
							</div>
							<div className={styles['vehicle-features']}>
								<span><i className="bx bx-user"></i> 5 seats</span>
								<span><i className="bx bx-diamond"></i> Premium</span>
								<span><i className="bx bx-cog"></i> Automatic</span>
							</div>
							<button className="button button-small" onClick={() => handleRentClick('Volvo XC60')}>Rent Now <i className="bx bx-right-arrow-alt button-icon"></i></button>
						</div>
					</article>
				</div>
				{/* View All Button for landing page only */}
				{(!props.showAll) && (
					<div style={{textAlign: 'center', marginTop: 32}}>
						<a href="/featured-cars" className="button">View All Featured Cars</a>
					</div>
				)}
				<RentNowModal
					show={showModal}
					onClose={() => setShowModal(false)}
					carName={selectedCar}
					form={form}
					onFormChange={handleFormChange}
					onFormSubmit={handleFormSubmit}
				/>
			</section>
	);
};

export default Featured;