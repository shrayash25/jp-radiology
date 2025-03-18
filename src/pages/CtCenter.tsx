import React from "react";
import "../index.css"; // Ensure global styles are applied

// Import images
import ctScannerImage from "../assets/img2ct-removebg-preview.png";
import ctScanExampleImage from "../assets/ctcaimg.png";
import doctor1Image from "../assets/radiologist.png";
import ctImage from "../assets/bodyimg.png";
import ctAImage from "../assets/ctcaimg.png";

const services = [
  {
    title: "CT Scans",
    description: (
      <ul>
        <li>Coronary, Brain, Lower limb and Mesenteric Angiography</li>
        <li>Myocardial, Brain and Liver perfusion</li>
        <li>Dynamic/moving bone scans</li>
        <li>All other CT scans</li>
        <li>CT Guided procedures - Drains and biopsies</li>
      </ul>
    ),
    image: ctImage,
  },
  {
    title: "CT Coronary Angiography",
    description: (
      <ul>
        <li>Non-invasive & Highly Accurate</li>
        <li>Early Detection of Heart Disease</li>
        <li>State-of-the-Art Technology</li>
        <li>Quick & Painless Procedure</li>
      </ul>
    ),
    image: ctAImage,
  },
];

const CTCenter: React.FC = () => {
  return (
    <div className="ct-center">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Advanced CT Imaging Services</h1>
          <p>Precision Imaging for Accurate Diagnoses</p>
        </div>
      </section>

      <section className="section">
        <h2>What is a CT Scan?</h2>
        <div className="row">
          <div className="text">
            <p>
              A Computed Tomography (CT) scan is a non-invasive imaging
              technique that provides detailed cross-sectional images of the
              body's internal structures. It is commonly used to diagnose
              conditions such as tumors, internal bleeding, bone fractures, and
              vascular diseases.
            </p>
          </div>
          <div className="image">
            <img src={ctScanExampleImage} alt="CT Scan Example" />
          </div>
        </div>
      </section>

      <section className="section bluebg">
        <h2>Our CT Scanner</h2>
        <div className="row reverse">
          <div className="image">
            <img src={ctScannerImage} alt="GE Revolution Maxima CT Scanner"  />
          </div>
          <div className="text">
            <h3>GE Revolution Maxima CT Scanner</h3>
            <ul>
              <li>
                <strong>AI-Based Auto Positioning:</strong> Uses real-time depth
                sensing technology to generate a 3D model of the patient's body,
                automating patient positioning with a one-click, hands-free
                experience.
              </li>
              <li>
                <strong>High Spatial Resolution:</strong> Offers a spatial
                resolution of 0.28 mm, making detailed imaging possible.
              </li>
              <li>
                <strong>Advanced Dose Reduction:</strong> Utilizes ASiR-V
                software to reduce radiation dose by up to 82% compared to
                traditional methods.
              </li>
              <li>
                <strong>40 mm Imaging Capability:</strong> Enables routine
                imaging with a wide field of view.
              </li>
              <li>
                <strong>Smart MAR:</strong> Provides single acquisition metal
                artifact reduction for clearer images.
              </li>
              <li>
                <strong>Smart Cardiac:</strong> Facilitates quick setup of
                complex cardiac procedures.
              </li>
              <li>
                <strong>Smart Stroke:</strong> Allows for rapid stroke
                assessment with perfusion shuttle technology.
              </li>
              <li>
                <strong>Tube Watch:</strong> Predicts tube failure three days in
                advance to prevent disruptions.
              </li>
              <li>
                <strong>Imaging Protocol Manager:</strong> Standardizes
                protocols across CT systems via a cloud-based platform.
              </li>
              <li>
                <strong>Advanced Visualization Tools:</strong> Offers
                applications to assist in image reading, automate
                post-processing, and streamline imaging review.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="section">
        <h2>Services Offered</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <img src={service.image} alt={service.title} />
              {service.description}
            </div>
          ))}
        </div>
      </section>

      {/* Meet out team Section */}
      <section className="section bluebg">
        <h2>Meet Our Team</h2>
        <div className="team">
          <div className="team-member">
            <img src={doctor1Image} alt="Dr. Saurav Gupta" />
            <div className="team-text">
              <h3>Dr. Saurav Gupta</h3>
              <p>Chief Radiologist with over 20 years of experience.</p>
              <p className="qualif">
                MBBS (MAMC, Delhi), FRCR (LONDON), MMED (SINGAPORE), FRANZCR
                (Australia/ New Zealand). Ex-Associate Program Director And
                Senior Faculty, National University Hospital, Singapore
                Consultant: JP Radiology. Panchmandir Road, Motihari Consultant:
                Crawfurd Medical Center And Hospital. Singapore Consultant: JP
                Radiology Pte Ltd, Singapore
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <h2>Contact Us</h2>
        <p>
          <strong>Address:</strong> JP Radiology, Panchmandir Road, Henary Bazar, Motihari, Bihar- 845401
        </p>
        <p>
          <strong>Phone:</strong> +91  7485829666, +918084644622
        </p>
        
      </section>
    </div>
  );
};

export default CTCenter;
