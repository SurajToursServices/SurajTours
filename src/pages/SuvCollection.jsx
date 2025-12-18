import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from '../components/Fleet/Fleet.module.css';
import RentNowModal from '../components/RentNowModal/RentNowModal';
import emailjs from 'emailjs-com';

const suvCars = [
  {
    name: 'Toyota Fortuner',
    img: 'https://pngimg.com/d/toyota_PNG1953.png',
    price: '$99/day',
    features: ['7 seats', 'Automatic', 'Diesel'],
    offer: '10% OFF',
  },
  {
    name: 'Mahindra XUV700',
    img: 'https://www.pngall.com/wp-content/uploads/8/SUV-Car-PNG-File.png',
    price: '$89/day',
    features: ['7 seats', 'Automatic', 'Petrol'],
    offer: '',
  },
  {
    name: 'Hyundai Creta',
    img: 'https://www.pngplay.com/wp-content/uploads/7/White-Car-Transparent-Free-PNG.png',
    price: '$79/day',
    features: ['5 seats', 'Automatic', 'Petrol'],
    offer: '20% OFF',
  },
  // Add more SUV models as needed
];


const SuvCollection = () => {
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

  const handleBookNow = (carName) => {
    const car = suvCars.find(c => c.name === carName);
    setSelectedCar(carName);
    setForm(f => ({ ...f, car: carName, offer: car && car.offer ? car.offer : '' }));
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
      offer: form.offer || '',
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
        setForm({ name: '', email: '', phone: '', car: '', offer: '', startDate: '', endDate: '', pickupLocation: '', dropoffLocation: '', license: '', notes: '' });
      }, (error) => {
        alert('There was an error submitting your request. Please try again.');
      });
  };

  return (
    <>
      <Header />
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">SUV & Crossover Collection</h2>
          <p>Perfect for family adventures, group travel, and outdoor excursions</p>
        </div>
        <div className={`${styles['fleet-vehicles']} bd-grid`}>
          {suvCars.map(car => (
            <div className={styles['fleet-vehicle-card']} key={car.name}>
              <img src={car.img} alt={car.name} className={styles['fleet-vehicle-img']} />
              <div className={styles['fleet-vehicle-overlay']}>
                <div className={styles['fleet-vehicle-info']}>
                  <h4>{car.name}</h4>
                  <span className="price">{car.price}</span>
                  <div className="features">
                    <span><i className="bx bx-user"></i> {car.features[0]}</span>
                    <span><i className="bx bx-cog"></i> {car.features[1]}</span>
                    <span><i className="bx bx-gas-pump"></i> {car.features[2]}</span>
                  </div>
                  {car.offer && (
                    <div style={{marginTop:'0.5rem',color:'#fff',background:'#ff4d4f',borderRadius:'1rem',padding:'0.2rem 1rem',display:'inline-block',fontWeight:'bold',fontSize:'1rem'}}>
                      {car.offer}
                    </div>
                  )}
                </div>
                <button className="button" onClick={() => handleBookNow(car.name)}>Book Now</button>
              </div>
            </div>
          ))}
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
      <Footer />
    </>
  );
};

export default SuvCollection;
