import React from 'react';
import styles from './Collection.module.css';
import { Link } from 'react-router-dom';

const Collection = () => (
	<section className={`${styles.collection} section`}>
		<div className={`${styles['collection-container']} bd-grid`}>
			<div className={`${styles['collection-card']} ${styles['collection-card-suv']}`}>
				<div className={styles['collection-data']}>
					<h3 className={styles['collection-name']}>SUV & Crossover Collection</h3>
					<p className={styles['collection-description']}>Perfect for family adventures, group travel, and outdoor excursions</p>
					<Link to="/suvs" className="button button-outline">Explore SUVs <i className="bx bx-right-arrow-alt button-icon"></i></Link>
				</div>
			</div>
			<div className={`${styles['collection-card']} ${styles['collection-card-sports']}`}>
				<div className={styles['collection-data']}>
					<h3 className={styles['collection-name']}>Sports & Performance Cars</h3>
					<p className={styles['collection-description']}>Thrilling performance and exhilarating driving experience</p>
					<Link to="/sports" className="button button-outline">View Sports <i className="bx bx-right-arrow-alt button-icon"></i></Link>
				</div>
			</div>
		</div>
	</section>
);

export default Collection;