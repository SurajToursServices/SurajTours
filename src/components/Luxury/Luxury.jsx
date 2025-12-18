
import React, { useState } from 'react';
import styles from './Luxury.module.css';
import RentNowModal from '../RentNowModal/RentNowModal';
import emailjs from 'emailjs-com';

const luxuryCars = [
	{
		name: 'Mercedes S-Class',
		img: 'https://pngimg.com/d/mercedes_PNG1903.png',
		price: '$199',
		features: ['5 seats', 'Premium', 'Automatic'],
	},
	{
		name: 'Porsche 911',
		img: 'https://www.pngall.com/wp-content/uploads/8/SUV-Car-PNG-File.png',
		price: '$249',
		features: ['2 seats', 'Premium', 'Automatic'],
	},
	{
		name: 'Range Rover Sport',
		img: 'https://www.pngplay.com/wp-content/uploads/7/White-Car-Transparent-Free-PNG.png',
		price: '$179',
		features: ['5 seats', 'Diesel', 'Automatic'],
	},
	{
		name: 'BMW 7 Series',
		img: 'https://pngimg.com/d/bmw_PNG1690.png',
		price: '$189',
		features: ['5 seats', 'Premium', 'Automatic'],
	},
];

const Luxury = (props) => {
	const [showModal, setShowModal] = useState(false);
	const [selectedCar, setSelectedCar] = useState('');
	const [form, setForm] = useState({
		name: '',
		email: '',
		phone: '',
		car: '',
		startDate: '',
		endDate: '',
		pickupLocation: '',
		dropoffLocation: '',
		license: '',
		notes: '',
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
				setForm({ name: '', email: '', phone: '', car: '', startDate: '', endDate: '', pickupLocation: '', dropoffLocation: '', license: '', notes: '' });
			}, (error) => {
				alert('There was an error submitting your request. Please try again.');
			});
	};

		return (
			<section className={`${styles.luxury} section`} id="luxury">
				<div className="section-header">
					<span className="section-subtitle">Ultimate Luxury</span>
					<h2 className="section-title">PREMIUM LUXURY FLEET</h2>
				</div>
				<div className={`${styles['luxury-container']} bd-grid`}>
					{luxuryCars.map(car => (
						<article className={`${styles['vehicle-luxury']} vehicle`} key={car.name}>
							<img src={car.img} alt={car.name} className={`${styles['luxury-img']} vehicle-img`} />
							<div className="vehicle-info">
								<div className="vehicle-meta">
									<span className="vehicle-name">{car.name}</span>
									<span className="vehicle-price">{car.price}<span>/day</span></span>
								</div>
								<div className="vehicle-features">
									{car.features.map(f => <span key={f}><i className="bx bx-user"></i> {f}</span>)}
								</div>
								<button className="button button-small" onClick={() => handleRentClick(car.name)}>
									Rent Now <i className="bx bx-right-arrow-alt button-icon"></i>
								</button>
							</div>
						</article>
					))}
				</div>
				{/* View All Button for landing page only */}
				{(!props.showAll) && (
					<div style={{textAlign: 'center', marginTop: 32}}>
						<a href="/luxury-cars" className="button">View All Luxury Cars</a>
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

export default Luxury;