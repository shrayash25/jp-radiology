import React from "react";
import "../index.css"; // Ensure global styles are applied

const locations = [
  {
    name: "📍 CT Scan Center - Motihari",
    address: "JP Radiology, Panchmandir Rd, Henary Bazar, Motihari, Bihar 845401",
    phone: "+91 7485829666, +91 8084644622",

    mapLink: "https://g.co/kgs/MgVHjn9",
  },
  {
    name: "📍 Pathology Lab - Motihari",
    address: "JP Radiology Pathology Unit, Panchmandir Rd, Henary Bazar, Motihari, Bihar 845401",
    phone: "+91 7485829666, +91 8084644622",

    mapLink: "https://g.co/kgs/MgVHjn9", 
  },
  {
    name: "📍 MRI Scan Center - Motihari",
    address: "JP Radiology  MRI Unit ,Kolhuarwa, East Champaran, Near Devraha Baba Mandir, Motihari, Bihar",
    phone: "+91 7717747287 ",

    mapLink: "https://g.co/kgs/LhXBSF2", 
  },
];
const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment by calling our center or visiting us directly. Online booking will be available soon.",
  },
  {
    question: "What are your operating hours?",
    answer: "We are open from 8:00 AM to 8:00 PM, Monday to Saturday. Sunday appointments are available on request.",
  },
  {
    question: "Do I need a doctor's referral for a CT or MRI scan?",
    answer: "Yes, a doctor's referral is required for certain scans. Please check with our staff for specific requirements.",
  },
  {
    question: "How long does a scan take?",
    answer: "A typical MRI scan takes around 30-45 minutes, while a CT scan is usually completed in 5-15 minutes.",
  },
  {
    question: "Is fasting required before a scan?",
    answer: "For some scans, fasting may be required. Our team will inform you about any necessary preparations.",
  },
  {
    question: "Is your center equipped with AI-based imaging?",
    answer: "Yes, we use advanced AI-powered imaging for improved diagnosis and accuracy.",
  },
];

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero5">
        <div className="hero-overlay">
          <h1>Contact Us</h1>
          <p>Reach Out to Our Radiology Experts</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <h2>Get in Touch</h2>
        <p>If you have any questions or need to schedule an appointment, feel free to contact us.</p>

        <div className="contact-container">
          {locations.map((location, index) => (
            <div className="contact-card" key={index}>
              <h3>{location.name}</h3>
              <p><strong>Address:</strong> {location.address}</p>
              <p><strong>Phone:</strong> {location.phone}</p>
              <a href={location.mapLink} target="_blank" rel="noopener noreferrer" className="locate-us">
                Locate Us
              </a>
            </div>
          ))}
        </div>
      </section>


      {/* FAQs Section */}
      <section className="section bluebg">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
