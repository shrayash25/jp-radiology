import React from "react";
import "../index.css"; // Ensure global styles are applied

// Import images
import pathologyLabImage from "../assets/pthimg.webp";
import sampleTestingImage from "../assets/pthimg2.webp";
import doctorImage from "../assets/pathologist.jpg";

const services = [
  {
    title: "Comprehensive Diagnostic Tests",
    description: (
      <ul>
        <li>Blood Tests (CBC, Lipid Profile, Liver & Kidney Function)</li>
        <li>Urine & Stool Analysis</li>
        <li>Diabetes Screening (HbA1c, Glucose Tolerance Test)</li>
        <li>Thyroid Function Tests (TSH, T3, T4)</li>
        <li>Hormonal & Metabolic Panel</li>
      </ul>
    ),
  },
  {
    title: "Cancer & Specialized Screenings",
    description: (
      <ul>
        <li>Biopsy & Histopathology</li>
        <li>Tumor Markers (PSA, CA-125, CEA)</li>
        <li>Pap Smear & Cervical Cancer Screening</li>
        <li>Genetic & Molecular Testing</li>
        <li>Hematology & Coagulation Studies</li>
      </ul>
    ),
  },
];

const Pathology: React.FC = () => {
  return (
    <div className="pathology-center">
      {/* Hero Section */}
      <section className="hero3">
        <div className="hero-overlay">
          <h1>Advanced Pathology Services</h1>
          <p>Accurate Diagnostic Testing for Better Health</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section">
        <h2>What is Pathology?</h2>
        <div className="row">
          <div className="text">
            <p>
              Pathology is the study of diseases, including their causes,
              development, and effects on the body. Our advanced diagnostic
              testing services help in early disease detection and effective
              treatment planning.
            </p>
          </div>
          <div className="image">
            <img src={sampleTestingImage} alt="Sample Testing" />
          </div>
        </div>
      </section>

      {/* Pathology Lab Section */}
      <section className="section bluebg">
        <h2>Our Pathology Lab</h2>
        <div className="row reverse">
          <div className="image">
            <img src={pathologyLabImage} alt="Pathology Lab" />
          </div>
          <div className="text">
            <h3>State-of-the-Art Laboratory</h3>
            <ul>
              <li>
                <strong>Automated Testing Equipment:</strong> Ensures precision
                and fast turnaround times.
              </li>
              <li>
                <strong>Quality Control Measures:</strong> Rigorous testing
                standards for accurate results.
              </li>
              <li>
                <strong>Wide Range of Tests:</strong> Covers blood work,
                microbiology, and histopathology.
              </li>
              <li>
                <strong>Digital Reporting:</strong> Instant access to results
                online.
              </li>
              <li>
                <strong>Expert Pathologists:</strong> Highly skilled doctors
                ensuring accurate diagnoses.
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
            <img src={doctorImage} alt="Dr. Pathologist" />
            <div className="team-text">
              <h3>Dr. Monika Gupta</h3>
              <p>Senior Pathologist with over 12 years of experience.</p>
              <p className="qualif">
              MBBS (JNMC, Bhagalpur), PG  Clinical Pathology (JJMMC, Devangere).
               Head of Pathology at JP Radiology.
              </p>
              <p>Specialities:</p>
              <ul>
                <li>Histopathology: Grossing, preliminary reporting</li>
                <li>Haematology: peripheral smear staining and reporting</li>
                <li>Cytology: FNA, staining and preliminary reporty</li>
                <li>Blood bank: Cross matching</li>
                <li>Microbiology: culture, staining and preliminary reporting</li>
              </ul>
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

export default Pathology;
