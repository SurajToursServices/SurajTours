import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import ScrollToSection from './ScrollToSection';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Featured from './components/Featured/Featured';
import Collection from './components/Collection/Collection';
import Luxury from './components/Luxury/Luxury';
import Offer from './components/Offer/Offer';
import Fleet from './components/Fleet/Fleet';
import Testimonials from './components/Testimonials/Testimonials';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import SuvCollection from './pages/SuvCollection';
import SportsCollection from './pages/SportsCollection';
import AllCars from './pages/AllCars';
import LuxuryFleet from './pages/LuxuryFleet';
import Contact from './components/Contact/Contact';
import FeaturedCarsPage from './pages/FeaturedCarsPage';
import LuxuryCarsPage from './pages/LuxuryCarsPage';

function App() {
		return (
			<Router>
				   <ScrollToTop />
				   <ScrollToSection />
				   <Routes>
					   <Route path="/" element={
						   <>
							   <Header />
							   <main>
								   <Home />
								   <Featured />
								   <Collection />
								   <Luxury />
								   <Offer />
								   <Fleet />
								   <Testimonials />
								   <Newsletter />
							   </main>
							   <Footer />
						   </>
					   } />
					   <Route path="/home" element={
						   <>
							   <Header />
							   <main>
								   <Home />
								   <Featured />
								   <Collection />
								   <Luxury />
								   <Offer />
								   <Fleet />
								   <Testimonials />
								   <Newsletter />
							   </main>
							   <Footer />
						   </>
					   } />
					   <Route path="/suvs" element={<SuvCollection />} />
					   <Route path="/sports" element={<SportsCollection />} />
					   <Route path="/all-cars" element={<AllCars />} />
					   <Route path="/luxury-fleet" element={<LuxuryFleet />} />
					   <Route path="/contact" element={<Contact />} />
					   <Route path="/featured-cars" element={<FeaturedCarsPage />} />
					   <Route path="/luxury-cars" element={<LuxuryCarsPage />} />
					   <Route path="*" element={<Navigate to="/" />} />
				   </Routes>
			</Router>
		);
}

export default App;