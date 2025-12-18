import React, { useState } from 'react';
import styles from './Newsletter.module.css';
import emailjs from 'emailjs-com';

const Newsletter = () => {
	const [email, setEmail] = useState('');
	const [submitted, setSubmitted] = useState(false);

		const handleSubmit = (e) => {
			e.preventDefault();
			// Send email via EmailJS
			emailjs.send('service_4wzrzxj', 'template_ccovevq', {
				email: email,
				name: '',
				phone: '',
				car: 'Newsletter Subscription',
				startDate: '',
				endDate: '',
				pickupLocation: '',
				dropoffLocation: '',
				license: '',
				notes: 'Newsletter subscription request from website.'
			}, 'S2_28wfbwpIQ3uDMu')
				.then(() => {
					setSubmitted(true);
					setEmail('');
				}, () => {
					setSubmitted(true);
					setEmail('');
				});
		};

	return (
		<section className={`${styles.newsletter} section`} id="contact">
			<div className={`${styles['newsletter-container']} bd-grid`}>
				<div className="newsletter-content">
					<h3 className={styles['newsletter-title']}>Stay Updated with SurajTours</h3>
					<p className={styles['newsletter-description']}>Get exclusive offers, updates on new arrivals, special promotions, and insider access to our premium fleet</p>
				</div>
				{submitted ? (
					<div style={{padding:'1.5rem',textAlign:'center',color:'#2ecc40',fontWeight:'bold',fontSize:'1.1rem'}}>
						Thank you for contacting us. Our team will reach out to you with the latest update and offers within 24 hours.
					</div>
				) : (
					<form className="newsletter-subscribe" onSubmit={handleSubmit}>
						<div className={styles['newsletter-form']}>
							<input
								type="email"
								className={styles['newsletter-input']}
								placeholder="Your email address"
								required
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
							<button type="submit" className="button">Subscribe</button>
						</div>
					</form>
				)}
			</div>
		</section>
	);
};

export default Newsletter;