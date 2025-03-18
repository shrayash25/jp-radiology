import React from "react";
import "../index.css"; // Ensure global styles are applied

// Import images
import mriScannerImage from "../assets/img1mri-removebg-preview.png";
import mriScanExampleImage from "../assets/img2mri.jpg";
import doctor1Image from "../assets/radiologist.png";
import doctor2Image from "../assets/radiologist2.png";

const services = [
  {
    title: "MRI Scans",
    description: (
      <ul>
        <li>Brain, Spine, and Musculoskeletal MRI</li>
        <li>Abdominal and Pelvic MRI</li>
        <li>Cardiac MRI for heart health evaluation</li>
        <li>Whole-body MRI for cancer screening</li>
        <li>MR Angiography for blood vessel imaging</li>
      </ul>
    ),
  },
];

const MRICenter: React.FC = () => {
  return (
    <div className="mri-center">
      {/* Hero Section */}
      <section className="hero2">
        <div className="hero-overlay">
          <h1>Advanced MRI Imaging Services</h1>
          <p>High-Resolution Imaging for Accurate Diagnoses</p>
        </div>
      </section>

      <section className="section">
        <h2>What is an MRI Scan?</h2>
        <div className="row">
          <div className="text">
            <p>
              Magnetic Resonance Imaging (MRI) is a non-invasive imaging
              technique that uses strong magnetic fields and radio waves to
              generate detailed images of organs and tissues. It is widely used
              for brain, spine, joint, and cardiac assessments.
            </p>
          </div>
          <div className="image">
            <img src={mriScanExampleImage} alt="MRI Scan Example" />
          </div>
        </div>
      </section>

      <section className="section bluebg">
        <h2>Our MRI Scanner</h2>
        <div className="row reverse">
          <div className="image">
            <img src={mriScannerImage} alt="GE Signa 1.5T MRI Scanner" />
          </div>
          <div className="text">
            <h3>GE Signa 1.5T MRI Scanner</h3>
            <ul>
              <li>
                <strong>1.5 Tesla Field Strength:</strong> Provides a robust
                magnetic field for high-quality imaging.
              </li>
              <li>
                <strong>HD CTL Spine Array Coils:</strong> Offers detailed
                imaging of the spine with a 12-element array.
              </li>
              <li>
                <strong>16-Channel Flex Suite Coils:</strong> Includes small,
                medium, and large coils for versatile imaging options.
              </li>
              <li>
                <strong>Premium Coil Options:</strong> Enhances image quality
                with advanced coil configurations.
              </li>
              <li>
                <strong>Advanced Imaging Sequences:</strong> Supports a variety
                of sequences for different body parts and conditions.
              </li>
              <li>
                <strong>High-Speed Data Acquisition:</strong> Enables fast
                scanning times for improved patient comfort and throughput.
              </li>
              <li>
                <strong>Advanced Reconstruction Techniques:</strong> Allows for
                detailed post-processing and analysis of images.
              </li>
              <li>
                <strong>Compatibility with Advanced Software:</strong> Supports
                various software tools for enhanced image analysis and
                visualization.
              </li>
              <li>
                <strong>Patient Comfort Features:</strong> Includes features to
                reduce noise and improve patient experience during scans.
              </li>
              <li>
                <strong>Upgrade and Scalability Options:</strong> Allows for
                future upgrades to keep the system current with evolving
                technology.
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
              {service.description}
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="section bluebg">
        <h2>Meet Our Team</h2>
        <div className="team">
          <div className="team-member">
            <img src={doctor1Image} alt="" />
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
          <div className="team-member">
            <img src={doctor2Image} alt="" />
            <div className="team-text">
              <h3>Dr. Nikita Sharan</h3>
              <p>Chief Radiologist with over 10 years of experience.</p>
              <p className="qualif">
              MBBS (Pune), DMRD (Bengaluru)
              Consultant Radiologist
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

export default MRICenter;
