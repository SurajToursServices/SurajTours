import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from '../components/Fleet/Fleet.module.css';
import RentNowModal from '../components/RentNowModal/RentNowModal';
import emailjs from 'emailjs-com';

const sportsCars = [
  {
    name: 'Ford Mustang',
    img: 'https://www.freeiconspng.com/uploads/red-hyundai-car-png-15.png',
    price: '$129/day',
    features: ['4 seats', 'Automatic', 'Petrol'],
    offer: '15% OFF',
  },
  {
    name: 'Porsche 911',
    img: 'https://www.pngall.com/wp-content/uploads/8/SUV-Car-PNG-File.png',
    price: '$249/day',
    features: ['2 seats', 'Automatic', 'Petrol'],
    offer: '',
  },
  {
    name: 'BMW M4',
    img: 'https://pngimg.com/d/bmw_PNG1690.png',
    price: '$189/day',
    features: ['4 seats', 'Automatic', 'Petrol'],
    offer: '10% OFF',
  },
  // Add more sports/performance cars as needed
];


const SportsCollection = () => {
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
    const car = sportsCars.find(c => c.name === carName);
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
          <h2 className="section-title">Sports & Performance Cars</h2>
          <p>Thrilling performance and exhilarating driving experience</p>
        </div>
        <div className={`${styles['fleet-vehicles']} bd-grid`}>
          {sportsCars.map(car => (
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

export default SportsCollection;
