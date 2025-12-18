import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';


const carImages = [
   {
      src: "https://pngimg.com/d/tesla_car_PNG21.png",
      alt: "Tesla Model 3"
   },
   {
      src: "https://pngimg.com/d/audi_PNG1736.png",
      alt: "Audi A4"
   },
   {
      src: "https://pngimg.com/d/mercedes_PNG1903.png",
      alt: "Mercedes S-Class"
   },
   {
      src: "https://pngimg.com/d/bmw_PNG1690.png",
      alt: "BMW 7 Series"
   },
   {
      src: "https://www.pngplay.com/wp-content/uploads/7/White-Car-Transparent-Free-PNG.png",
      alt: "Range Rover Sport"
   }
];

const Home = () => {
   const [current, setCurrent] = useState(0);
   useEffect(() => {
      const interval = setInterval(() => {
         setCurrent((prev) => (prev + 1) % carImages.length);
      }, 2000);
      return () => clearInterval(interval);
   }, []);

   return (
      <section className={styles.home} id="home">
         <div className={`${styles['home-container']} bd-grid`}>
            <div className={styles['home-car']}>
               <div className={styles['home-shape']}></div>
               <img
                  src={carImages[current].src}
                  alt={carImages[current].alt}
                  className={styles['home-img']}
                  key={carImages[current].src}
                  style={{ transition: 'opacity 0.5s' }}
               />
            </div>
            <div className={styles['home-data']}>
               <span className={styles['home-new']}>New Arrival</span>
               <h1 className={styles['home-title']}>Drive Premium. Arrive in Style.</h1>
               <p className={styles['home-description']}>
                  Luxury, comfort, and performance. Discover the best car rental experience with SurajTours.
               </p>
               <div className={styles['home-buttons']}>
                  <Link to="/luxury-fleet" className="button">View Fleet</Link>
                  <a href="/contact" className="button button-outline">Contact Us</a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Home;