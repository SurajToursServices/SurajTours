
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => (
	<footer className={`${styles.footer} section`}>
		<div className={`${styles['footer-container']} bd-grid`}>
			<div className={`${styles['footer-box']} footer-about`}>
				   <Link to="/" className={styles['footer-logo']}><span className={styles['logo-main']}>Suraj</span><span>Tours</span></Link>
				<p className={styles['footer-description']}>Premium car rental services with a focus on luxury, comfort, and exceptional customer experiences.</p>
				<div className={styles['footer-social']}>
					<a href="https://facebook.com/surajtours" className={styles['footer-social-link']}><i className="bx bxl-facebook"></i></a>
					<a href="https://instagram.com/surajtours" className={styles['footer-social-link']}><i className="bx bxl-instagram"></i></a>
					<a href="https://twitter.com/surajtours" className={styles['footer-social-link']}><i className="bx bxl-twitter"></i></a>
					<a href="https://linkedin.com/company/surajtours" className={styles['footer-social-link']}><i className="bx bxl-linkedin"></i></a>
				</div>
			</div>
			<div className={styles['footer-box']}>
				<h3 className={styles['footer-title']}>Navigation</h3>
				<ul>
					<li><a href="#home" className={styles['footer-link']}>Home</a></li>
					<li><a href="#featured" className={styles['footer-link']}>Featured Vehicles</a></li>
					<li><a href="#luxury" className={styles['footer-link']}>Luxury Fleet</a></li>
					<li><a href="#fleet" className={styles['footer-link']}>Our Fleet</a></li>
					<li><a href="#contact" className={styles['footer-link']}>Contact Us</a></li>
				</ul>
			</div>
			<div className={styles['footer-box']}>
				<h3 className={styles['footer-title']}>Customer Support</h3>
				<ul>
					<li><Link to="/faqs" className={styles['footer-link']}>FAQs</Link></li>
					<li><Link to="/privacy" className={styles['footer-link']}>Privacy Policy</Link></li>
					<li><Link to="/terms" className={styles['footer-link']}>Terms of Service</Link></li>
					<li><Link to="/rental-agreement" className={styles['footer-link']}>Rental Agreement</Link></li>
					<li><Link to="/roadside-assistance" className={styles['footer-link']}>Roadside Assistance</Link></li>
				</ul>
			</div>
			<div className={`${styles['footer-box']} footer-contact`}>
				<h3 className={styles['footer-title']}>Get In Touch</h3>
				<ul>
					<li><i className="bx bx-map"></i> 123 Premium Drive, Luxury District</li>
					<li><i className="bx bx-phone"></i> +1 (555) 123-4567</li>
					<li><i className="bx bx-envelope"></i> info@SurajTours.com</li>
					<li><i className="bx bx-time"></i> Mon-Sun: 8:00 AM - 8:00 PM</li>
				</ul>
			</div>
		</div>
		<div className={styles['footer-bottom']}>
			<p className={styles['footer-copy']}>&#169; 2023 <Link to="/" className={styles['footer-copy-link']}>SurajTours</Link>. All rights reserved</p>
			<div className={styles['footer-payments']}>
				<i className="bx bxl-visa"></i>
				<i className="bx bxl-mastercard"></i>
				<i className="bx bxl-paypal"></i>
				<i className="bx bxl-amex"></i>
			</div>
		</div>
	</footer>
);

export default Footer;