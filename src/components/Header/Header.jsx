import React, { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const navMenuRef = useRef(null);
  const navToggleRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const navMenu = navMenuRef.current;
    // Close Mobile Menu When Clicking Links
    const navLinks = navMenu.querySelectorAll('a');
    const linkAction = () => {
      setMenuOpen(false);
    };
    navLinks.forEach(n => n.addEventListener('click', linkAction));

    // Active Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    function scrollActive() {
      const scrollY = window.pageYOffset;
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = navMenu.querySelector(`a[href*="${sectionId}"]`);
        if (navLink) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active');
          } else {
            navLink.classList.remove('active');
          }
        }
      });
    }
    window.addEventListener('scroll', scrollActive);

    // Change Header Background on Scroll
    function scrollHeader() {
      const header = document.getElementById('header');
      if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    }
    window.addEventListener('scroll', scrollHeader);

    // Smooth Scroll for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const smoothScroll = function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    };
    anchorLinks.forEach(anchor => anchor.addEventListener('click', smoothScroll));

    // Cleanup
    return () => {
      navLinks.forEach(n => n.removeEventListener('click', linkAction));
      window.removeEventListener('scroll', scrollActive);
      window.removeEventListener('scroll', scrollHeader);
      anchorLinks.forEach(anchor => anchor.removeEventListener('click', smoothScroll));
    };
  }, []);

    // Compute nav-menu className with show if menuOpen
    const navMenuClass = menuOpen
      ? `${styles['nav-menu']} ${styles['show']}`
      : styles['nav-menu'];

    // Icon class based on menuOpen
    const iconClass = menuOpen ? 'bx bx-x' : 'bx bx-menu';

    // Hamburger click handler
    const handleToggle = () => setMenuOpen(prev => !prev);

    return (
      <header className={styles['l-header']} id="header">
        <nav className={`${styles.nav} bd-grid`}>
          <div className={styles['nav-toggle']} id="nav-toggle" ref={navToggleRef} onClick={handleToggle}>
            <i className={iconClass}></i>
          </div>
          <Link to="/" className={styles['nav-logo']}><span className={styles['logo-main']}>Suraj</span><span>Tours</span></Link>
          <div className={navMenuClass} id="nav-menu" ref={navMenuRef}>
            <ul className={styles['nav-list']}>
              <li className={styles['nav-item']}><Link to="/" className={`${styles['nav-link']} active`}>Home</Link></li>
              <li className={styles['nav-item']}><Link to="/featured-cars" className={styles['nav-link']}>Featured</Link></li>
              <li className={styles['nav-item']}><Link to="/luxury-cars" className={styles['nav-link']}>Luxury</Link></li>
              <li className={styles['nav-item']}><Link to="/all-cars" className={styles['nav-link']}>Our Fleet</Link></li>
              <li className={styles['nav-item']}><Link to="/contact" className={styles['nav-link']}>Contact</Link></li>
            </ul>
          </div>
          <div className={styles['nav-cta']}>
            <Link to="/all-cars" className="button button-outline">Book Now</Link>
          </div>
        </nav>
      </header>
    );
};

export default Header;