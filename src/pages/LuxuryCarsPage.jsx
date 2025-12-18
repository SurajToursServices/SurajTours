import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Luxury from '../components/Luxury/Luxury';

const LuxuryCarsPage = () => (
  <>
    <Header />
    <main style={{ minHeight: '60vh', padding: '32px 0', background: '#f8f9fa' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 32 }}>All Luxury Cars</h1>
      <Luxury showAll={true} />
    </main>
    <Footer />
  </>
);

export default LuxuryCarsPage;
