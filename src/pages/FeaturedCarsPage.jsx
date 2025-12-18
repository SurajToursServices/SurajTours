import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Featured from '../components/Featured/Featured';

const FeaturedCarsPage = () => (
  <>
    <Header />
    <main style={{ minHeight: '60vh', padding: '32px 0', background: '#f8f9fa' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 32 }}>All Featured Cars</h1>
      <Featured showAll={true} />
    </main>
    <Footer />
  </>
);

export default FeaturedCarsPage;
