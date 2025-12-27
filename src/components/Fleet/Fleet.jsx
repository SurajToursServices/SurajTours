import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Fleet.module.css';
import RentNowModal from '../RentNowModal/RentNowModal';


const carList = [
	{
		name: 'Toyota Corolla',
		category: 'economy',
		img: 'https://pngimg.com/d/toyota_PNG1953.png',
		price: '$49/day',
		features: ['5', '6.7L/100km', 'Auto'],
	},
	{
		name: 'Honda Civic',
		category: 'sedan',
		img: 'https://pngimg.com/d/hyundai_PNG11217.png',
		price: '$59/day',
		features: ['5', '6.2L/100km', 'Auto'],
	},
	{
		name: 'Ford Mustang',
		category: 'sports',
		img: 'https://www.freeiconspng.com/uploads/red-hyundai-car-png-15.png',
		price: '$129/day',
		features: ['4', '9.8L/100km', 'Auto'],
	},
	// Add more cars with appropriate categories as needed
];

const Fleet = () => {
	const [showModal, setShowModal] = useState(false);
	const [selectedCar, setSelectedCar] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('economy');
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

		// Remove useEffect and handle category click with React state

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
			<section className={`${styles.fleet} section`} id="fleet">
				<div className="section-header">
					<span className="section-subtitle">Complete Vehicle Selection</span>
					<h2 className="section-title">OUR COMPLETE FLEET</h2>
				</div>
				<div className={`${styles['fleet-container']} bd-grid`}>
					<div className={styles['fleet-categories']}>
						{['economy', 'sedan', 'suv', 'luxury', 'sports'].map(cat => (
							<div
								key={cat}
								className={
									styles['fleet-category'] + (selectedCategory === cat ? ' ' + styles['active'] : '')
								}
								data-category={cat}
								onClick={() => setSelectedCategory(cat)}
							>
								<i className="bx bx-car"></i>
								<span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
							</div>
						))}
					</div>
							<div className={styles['fleet-vehicles']}>
								{carList.filter(car => car.category === selectedCategory).length === 0 ? (
									<div style={{padding: '2rem', textAlign: 'center', width: '100%'}}>
										<span>Right now no car is available for this category.</span>
									</div>
								) : (
									carList.filter(car => car.category === selectedCategory).map(car => (
										<div className={styles['fleet-vehicle-card']} key={car.name}>
											<img src={car.img} alt={car.name} className={styles['fleet-vehicle-img']} />
											<div className={styles['fleet-vehicle-info']}>
												<h4>{car.name}</h4>
												<span className="price">{car.price}</span>
												<div className="features">
													<span><i className="bx bx-user"></i> {car.features[0]}</span>
													<span><i className="bx bx-gas-pump"></i> {car.features[1]}</span>
													<span><i className="bx bx-cog"></i> {car.features[2]}</span>
												</div>
												<button className="button" onClick={() => handleRentClick(car.name)}>Rent Now</button>
											</div>
										</div>
									))
								)}
							</div>
				</div>
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

export default Fleet;