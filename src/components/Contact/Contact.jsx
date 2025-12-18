import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Contact.module.css";
import emailjs from 'emailjs-com';

// Use the same credentials as in Featured.jsx
const EMAILJS_SERVICE_ID = 'service_4wzrzxj';
const EMAILJS_TEMPLATE_ID = 'template_ccovevq';
const EMAILJS_PUBLIC_KEY = 'S2_28wfbwpIQ3uDMu';

const Contact = () => {
  const [status, setStatus] = React.useState("");
  const formRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");
    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formRef.current,
      EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className={styles.contactPage}>
      <Header />
      <main className={styles.contactMain}>
        <h1 className={styles.pageTitle}>Contact Us</h1>
        <div className={styles.contactCard}>
          <div className={styles.leftPane}>
            <div className={styles.aboutSection}>
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Business Owner"
                className={styles.ownerPhoto}
              />
              <h2>About Us</h2>
              <p>
                Welcome to CarRent Tours & Services! We are dedicated to providing top-notch car rental and tour services for all your travel needs. Whether you need a luxury ride, a family SUV, or a sports car for a special occasion, we have a fleet to suit every requirement. Our experienced team ensures a smooth and memorable journey for every customer.
              </p>
              <ul>
                <li>Wide range of vehicles: SUVs, luxury, sports, and more</li>
                <li>Custom tour packages and business travel solutions</li>
                <li>24/7 customer support and roadside assistance</li>
                <li>Easy online booking and flexible rental plans</li>
              </ul>
            </div>
          </div>
          <div className={styles.rightPane}>
            <div className={styles.formSection}>
              <h2>Send Us a Message</h2>
              <form className={styles.contactForm} ref={formRef} onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input type="text" name="name" required />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" required />
                </label>
                <label>
                  Message:
                  <textarea name="message" rows="4" required></textarea>
                </label>
                <button type="submit">Send</button>
              </form>
              {status && <div className={styles.statusMsg} style={{marginTop:12, color: status.includes('success') ? 'green' : 'red'}}>{status}</div>}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
