import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => (
	<section className={`${styles.testimonials} section`}>
		<div className="section-header">
			<span className="section-subtitle">Customer Stories</span>
			<h2 className="section-title">WHAT OUR CLIENTS SAY</h2>
		</div>
		<div className={`${styles['testimonials-container']} bd-grid`}>
			<div className={styles['testimonial-card']}>
				<div className={styles['testimonial-rating']}>
					<i className="bx bxs-star"></i>
					<i className="bx bxs-star"></i>
					<i className="bx bxs-star"></i>
					<i className="bx bxs-star"></i>
					<i className="bx bxs-star"></i>
				</div>
				<p className={styles['testimonial-text']}>"Absolutely flawless experience from start to finish. The Mercedes S-Class was in pristine condition and made our business trip incredibly comfortable."</p>
				<div className={styles['testimonial-author']}>
					<img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael Johnson" />
					<div>
						<h4>Michael Johnson</h4>
						<span>Business Executive</span>
					</div>
				</div>
			</div>
			<div className={styles['testimonial-card']}>
				<div className={styles['testimonial-rating']}>
					<i className="bx bxs-star"></i>
					<i className="bx bxs-star"></i>
					<i className="bx bxs-star"></i>
					<i className="bx bxs-star"></i>
					<i className="bx bxs-star-half"></i>
				</div>
				<p className={styles['testimonial-text']}>"Renting the Tesla Model 3 was a game-changer for our family vacation. The seamless process and excellent customer service will make me a repeat customer."</p>
				<div className={styles['testimonial-author']}>
					<img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Williams" />
					<div>
						<h4>Sarah Williams</h4>
						<span>Family Vacation</span>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Testimonials;